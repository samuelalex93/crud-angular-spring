import { routes } from './../app.routes';
import { CoursesService } from './services/courses.service';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { Course } from './model/course';
import { Component, inject } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { CategoryPipe } from '../shared/pipes/category.pipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [AppMaterialModule, CommonModule, CategoryPipe],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  dialog = inject(MatDialog);

  constructor(private coursesService: CoursesService, private router: Router, private route: ActivatedRoute) {
    this.courses$ = this.coursesService.list().pipe(
      catchError(err => {
        this.openDialog("Ocorreu um erro ao buscar cursos!");
        return of([]);
      })
    );
  }

  displayedColumns: string[] = ['name', 'category', 'actions'];

  openDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
