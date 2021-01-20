import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({

  imports: [
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatDatepickerModule,
    MatIconModule,
    MatPseudoCheckboxModule,
    MatMenuModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule
    , MatListModule
    , MatCardModule
    , MatSelectModule
    , MatExpansionModule,
    MatDialogModule
    , MatTabsModule
    , MatProgressBarModule
    , MatProgressSpinnerModule
    ],
  exports: [
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatDatepickerModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule
    , MatCheckboxModule
    , MatSlideToggleModule
    , MatListModule
    , MatCardModule
    , MatSelectModule
    , MatExpansionModule
    , MatDialogModule
    , MatTabsModule
    , MatProgressBarModule
    , MatProgressSpinnerModule

  ]

})


export class Material { }
