import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { AdminComponent } from './admin/admin.component';
import { SingupComponent } from './singup/singup.component';
import { ReportesComponent } from './reportes/reportes.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { CloudComponent } from './cloud/cloud.component';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { DatosPrincipalComponent } from './datos-principal/datos-principal.component';

//Para conectar con base de datos
import{ FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    AdminComponent,
    SingupComponent,
    ReportesComponent,
    MyaccountComponent,
    AccessDeniedComponent,
    CloudComponent,
    TreeViewComponent,
    DatosPrincipalComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
