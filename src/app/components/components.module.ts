import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { SuperheroeComponent } from './superheroe/superheroe.component';
import { Material } from '../material';
import { ItemListaSuperheroeComponent } from './superheroe/lista-superheroe/item-lista-superheroe/item-lista-superheroe.component';
import { ListaSuperheroeComponent } from './superheroe/lista-superheroe/lista-superheroe.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsSuperheroeComponent } from './superheroe/lista-superheroe/details-superheroe/details-superheroe.component';

@NgModule({
  declarations: [SuperheroeComponent, ItemListaSuperheroeComponent, ListaSuperheroeComponent, DetailsSuperheroeComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    Material,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
