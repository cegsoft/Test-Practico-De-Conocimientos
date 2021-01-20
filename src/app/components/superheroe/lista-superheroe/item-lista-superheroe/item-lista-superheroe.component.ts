import { Component, Input, OnInit } from '@angular/core';
import { Superheroes } from 'src/app/model/superheroe';

@Component({
  selector: 'app-item-lista-superheroe',
  templateUrl: './item-lista-superheroe.component.html',
  styleUrls: ['./item-lista-superheroe.component.css']
})
export class ItemListaSuperheroeComponent implements OnInit {

  @Input() supereroe!: Superheroes;
  constructor() { }

  ngOnInit(): void {
  }

}
