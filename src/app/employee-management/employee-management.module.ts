import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeManagementComponent } from './employee-management.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatPseudoCheckboxModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableModule } from '@angular/cdk/table';
import { A11yModule } from '@angular/cdk/a11y';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeDetailComponent,
    EmployeeManagementComponent
  ],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    ReactiveFormsModule,
    A11yModule,
    CdkTableModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    PortalModule,
    ScrollingModule,
    ToastrModule.forRoot(
      {
        positionClass: 'table'
      }
    ) 
  ]
})
export class EmployeeManagementModule { }
