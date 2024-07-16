import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormArray,
  FormsModule,
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

  constructor() {
    this.employeeForm = new FormGroup({
      employees: new FormArray([]),
    });
  }

  get employees(): FormArray {
    return this.employeeForm.get('employees') as FormArray;
  }

  addEmployee() {
    const employeeGroup = new FormGroup({
      name: new FormControl(''),
      job: new FormControl(''),
    });
    this.employees.push(employeeGroup);
  }

  submitForm() {
    console.log(this.employeeForm.value);
  }
}
