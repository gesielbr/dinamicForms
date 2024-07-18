import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormArray,
  FormsModule,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dinamicForms';

  employeeForm: FormGroup;

  // using the form builder,
  // we eliminate the need to instantiate
  // individual form control and form

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      employees: this.fb.array([]),
    });
  }

  get employees(): FormArray {
    return this.employeeForm.get('employees') as FormArray;
  }

  addEmployee() {
    const employeeGroup = this.fb.group({
      name: [''],
      job: [''],
    });
    this.employees.push(employeeGroup);
  }

  submitForm() {
    console.log(this.employeeForm.value);
  }
}
