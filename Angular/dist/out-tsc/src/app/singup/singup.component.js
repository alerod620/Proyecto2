var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { RegisterService } from 'src/app/servicio/register.service';
import { Router } from '@angular/router';
var SingupComponent = /** @class */ (function () {
    function SingupComponent(register, router) {
        this.register = register;
        this.router = router;
        this.usuario = "";
        this.nombre = "";
        this.apellido = "";
        this.password = "";
        this.correo = "";
        this.telefono = null;
        this.foto = "";
        this.genero = null;
        this.nacimiento = "";
        this.registro = "";
        this.direccion = "";
        this.rol = null;
    }
    SingupComponent.prototype.ngOnInit = function () {
    };
    SingupComponent.prototype.singup = function () {
        this.registro = new Date().toLocaleDateString();
        this.register.register(this.usuario, this.nombre, this.apellido, this.password, this.telefono, this.foto, this.genero, this.nacimiento, this.registro, this.direccion, this.rol, this.correo)
            .subscribe(function (res) {
            console.log();
        });
    };
    SingupComponent = __decorate([
        Component({
            selector: 'app-singup',
            templateUrl: './singup.component.html',
            styleUrls: ['./singup.component.scss']
        }),
        __metadata("design:paramtypes", [RegisterService, Router])
    ], SingupComponent);
    return SingupComponent;
}());
export { SingupComponent };
//# sourceMappingURL=singup.component.js.map