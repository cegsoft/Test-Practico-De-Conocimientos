import { Component, OnInit , AfterViewInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-superheroe',
  templateUrl: './superheroe.component.html',
  styleUrls: ['./superheroe.component.css']
})
export class SuperheroeComponent implements OnInit , AfterViewInit{

  buscarPor$: Subject<string> = new Subject<string>();

  constructor() {}



  ngOnInit(): void {

  }


  ngAfterViewInit(): void {
    this.buscarPor$.next('todo');
  }


  task: Selec = {
    name: 'Seleccione',
    completed: false,
    color: 'primary',
    items: [
      {name: 'Puede Volar', completed: true, color: 'primary'},
      {name: 'No puede volar', completed: true, color: 'primary'}

    ]
  };

  allComplete: boolean = true;

  updateAllComplete() {
    this.allComplete = this.task.items != null && this.task.items.every(t => t.completed);


    if (this.allComplete) {
    this.buscarPor$.next('todo');

      return;
    }

      if (!this.allComplete && this.task.items[0].completed == true ) {
        this.buscarPor$.next('puede_volar');

      }  else if (!this.allComplete && this.task.items[1].completed == true) {
        this.buscarPor$.next('no_puede_volar');
      } else {
        this.buscarPor$.next('no_buscar');
      }

  }

  someComplete(): boolean {
    if (this.task.items == null) {

      return false;

    }
    return this.task.items.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.items == null) {
      return;
    }
    this.task.items.forEach(t => t.completed = completed);

    if (!completed) {
      this.buscarPor$.next('no_buscar');
    } else {
      this.buscarPor$.next('todo');
    }


  }


}

export interface Selec {
  name: string;
  completed: boolean;
  color: ThemePalette;
  items: ItemSelec[];
}


export interface ItemSelec {
  name: string;
  completed: boolean;
  color: ThemePalette;
}

