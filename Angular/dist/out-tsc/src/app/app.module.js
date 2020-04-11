var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map