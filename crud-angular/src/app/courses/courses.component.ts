import { CoursesService } from './services/courses.service';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { Course } from './model/course';
import { Component, inject } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';



@Component({
  selector: 'app-courses',
  imports: [AppMaterialModule, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  dialog = inject(MatDialog);

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list().pipe(
      catchError(err => {
        this.openDialog("Ocorreu um erro!");
        return of([]);
      })
    );
  }
  
  displayedColumns: string[] = ['name', 'category'];
  
  openDialog(data: string) {
    this.dialog.open(ErrorDialogComponent, {
      data,
    });
  }
}
