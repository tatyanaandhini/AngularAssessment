import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeManagementComponent } from './employee-management.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeManagementComponent,
    children: [
      {
        path: 'list',
        component: EmployeeListComponent
      },
      {
        path: 'add',
        component: AddEmployeeComponent
      },
      {
        path: 'detail',
        component: EmployeeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeManagementRoutingModule { }
