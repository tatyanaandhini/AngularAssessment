import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})
export class EmployeeDetailComponent implements OnInit{
  @Input() employee: Employee;
  @Input() exitModal = (): void => {};

  rupiah = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  });

  detailForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.detailForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      birthDate: '',
      basicSalary: '',
      status: '',
      group: '',
      description: ''
    });

    this.detailForm.patchValue({
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      email: this.employee.email,
      birthDate: this.employee.birthDate,
      basicSalary: this.rupiah.format(this.employee.basicSalary),
      status: this.employee.status,
      group: this.employee.group,
      description: this.employee.description
    });
  }

}
