import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CourseFormComponent } from './courses/course-form/course-form.component';

export const routes: Routes = [
  //{path: '', pathMatch: "full", component: CoursesComponent},
  {
    path: 'courses', 
    loadComponent: () => import("./courses/courses.component").then((m) => m.CoursesComponent)
  },
  { path: 'courses/new', component: CourseFormComponent },

];
