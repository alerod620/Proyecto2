var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CloudComponent } from './cloud/cloud.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AdminComponent } from './admin/admin.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { DatosPrincipalComponent } from './datos-principal/datos-principal.component';
var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes)
            ],
            exports: [
                RouterModule
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map