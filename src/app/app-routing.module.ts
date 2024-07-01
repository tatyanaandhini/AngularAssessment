import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeManagementModule } from './employee-management/employee-management.module';
import { LoginModule } from './login/login.module';
import { authGuard } from './service/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login-routing.module').then((m) => LoginModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee-management/employee-management-routing.module').then((m) => EmployeeManagementModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
