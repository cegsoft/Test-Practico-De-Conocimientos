import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperheroeComponent } from './superheroe/superheroe.component';

const routes: Routes = [
  {path:'superheroe', component: SuperheroeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
