import { CoursesService } from './services/courses.service';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { Course } from './model/course';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-courses',
  imports: [AppMaterialModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list()
  }
  
  displayedColumns: string[] = ['name', 'category'];
  
  ngOnInit() {
  }
}
