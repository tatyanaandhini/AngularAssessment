import { Component } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.scss'
})
export class EmployeeManagementComponent {
  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
