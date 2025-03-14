import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  imports: [ReactiveFormsModule, AppMaterialModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      name: [null],
      category: [null]
    });
  }

  onSubmit() {
    console.log(this.form.value)
    this.service.save(this.form.value).subscribe(data => console.log(data), error => this.onError())
  }

  onCancel() {
    
  }

  private onError() {
    this.snackBar.open("Error when save course", '', {duration: 5000});
  }
}
