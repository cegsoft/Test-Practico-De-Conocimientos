import { Component, Inject,  OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailSuperheroe } from 'src/app/model/datail.superhero';
import { SuperheroesService } from 'src/app/services/superheroes.service';

@Component({
  selector: 'app-details-superheroe',
  templateUrl: './details-superheroe.component.html',
  styleUrls: ['./details-superheroe.component.css']
})
export class DetailsSuperheroeComponent implements OnInit, OnDestroy {

  detailSuperhero!: DetailSuperheroe  ;


  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public idSuperhero: number , private server: SuperheroesService) { }

  ngOnInit(): void {

    this.server.getDetailsSuperHero(this.idSuperhero).subscribe( n => {this.detailSuperhero = n.data;});
  }

  ngOnDestroy(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
