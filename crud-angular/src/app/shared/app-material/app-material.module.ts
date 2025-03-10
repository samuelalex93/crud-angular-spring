import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports: [MatTableModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class AppMaterialModule { }
