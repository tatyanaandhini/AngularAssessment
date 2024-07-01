import { Component, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../../model/employee';
import { Constants } from '../../shared/constants/constants';
import Swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
  providers: [BsModalService]
})
export class EmployeeListComponent {
  displayedColumns = ['firstName', 'lastName', 'status', 'group', 'actions'];
  datasource: MatTableDataSource<Employee>;
  filterForm: AbstractControl;
  modalRef: BsModalRef;
  employee: Employee;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private formBuilder: FormBuilder, private modalService: BsModalService) {
    this.datasource = new MatTableDataSource(Constants.USERS);

    this.datasource.filterPredicate = (
      (data, filter: any) => {
        const a = !filter.status || data.status.includes(filter.status);
        const b = !filter.group || data.group.includes(filter.group);
        return a && b;
      }
    ) as (e: Employee, s: string) => boolean;

    this.filterForm = formBuilder.group(
      {
        status: '',
        group: ''
      }
    )

    this.filterForm.valueChanges.subscribe(
      value => {
        const filter = {...value} as string;
        this.datasource.filter = filter;
      }
    );
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  getFormGroup() {
    return this.filterForm as FormGroup;
  }

  edit() {
    Swal.fire('Halaman Mengubah Data Karyawan', 'Mengubah Data Karyawan', 'warning');
  }

  delete() {
    Swal.fire('Data Karyawan terhapus', 'Menghapus Data Karyawan','error');
  }

  openDetailModal(data: Employee, DetailEmployeeTemplate: TemplateRef<any>) {
    this.employee = data;
    this.modalRef = this.modalService.show(DetailEmployeeTemplate);
  }

  exitModal = (): void => {
    this.modalRef?.hide();
  };
}
