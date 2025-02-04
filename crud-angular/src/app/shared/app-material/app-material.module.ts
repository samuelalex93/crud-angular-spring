import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  exports: [MatTableModule, MatToolbarModule, MatCardModule],
})
export class AppMaterialModule { }
