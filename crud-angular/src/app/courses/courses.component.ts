import { Course } from './model/course';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-courses',
  imports: [MatTableModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses: Course[] = [
    {_id: "1", name: 'Angular', category: 'Frontend'},
    {_id: "2", name: 'Java', category: 'Backend'},
  ]

  constructor() {
  }

  displayedColumns: string[] = ['name', 'category'];
}
