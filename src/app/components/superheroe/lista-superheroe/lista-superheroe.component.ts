import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Superheroes } from 'src/app/model/superheroe';
import { SuperheroesService } from 'src/app/services/superheroes.service';
import { DetailsSuperheroeComponent } from './details-superheroe/details-superheroe.component';

@Component({
  selector: 'app-lista-superheroe',
  templateUrl: './lista-superheroe.component.html',
  styleUrls: ['./lista-superheroe.component.css']
})
export class ListaSuperheroeComponent implements OnInit {

  @Input() buscarPor$!: Observable<string>;
  listaDeHeroes: Superheroes[] = [];

  constructor(private buscarSuperHeroesService: SuperheroesService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.buscarPor$.subscribe(b => this.find(b));

  }

  displayedColumns: string[] = ['number'];
  dataSource = new MatTableDataSource(this.listaDeHeroes);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  find(tipo: string) {

    if (tipo === 'todo') {
      this.buscarSuperHeroesService.getAllSuperHero().subscribe(s => { this.listaDeHeroes = s.data; this.reloadData(); });
    }
    if (tipo === 'puede_volar') {
      this.buscarSuperHeroesService.getOneTipeSuperHero(true).subscribe(s => { this.listaDeHeroes = s.data; this.reloadData(); });
    }
    if (tipo === 'no_puede_volar') {
      this.buscarSuperHeroesService.getOneTipeSuperHero(false).subscribe(s => { this.listaDeHeroes = s.data; this.reloadData(); });
    }
    if (tipo === 'no_buscar') {
      this.listaDeHeroes = [];
      this.reloadData();
    }
  }

  openDialog(idSuperhero: number) {
    console.log(idSuperhero);

    const dialogRef = this.dialog.open(DetailsSuperheroeComponent, {
      data: idSuperhero,
      height: '100%',

    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  reloadData() {
    this.dataSource = new MatTableDataSource(this.listaDeHeroes);
  }




}


