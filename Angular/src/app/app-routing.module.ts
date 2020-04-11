import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CloudComponent } from './cloud/cloud.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AdminComponent } from './admin/admin.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { DatosPrincipalComponent } from './datos-principal/datos-principal.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'singup',
    component: SingupComponent,
  },
  {
    path: 'reportes',
    component: ReportesComponent,
  },
  {
    path: 'cloud',
    component: CloudComponent,
  },
  {
    path: 'myaccount',
    component: MyaccountComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: 'datos-principal',
    component: DatosPrincipalComponent,
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
