import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  exports: [MatTableModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule, MatIconModule],
})
export class AppMaterialModule { }
