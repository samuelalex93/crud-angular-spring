import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  exports: [MatTableModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule],
})
export class AppMaterialModule { }
