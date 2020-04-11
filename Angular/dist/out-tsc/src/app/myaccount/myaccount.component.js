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
import { UpdateService } from 'src/app/servicio/update.service';
import { Router } from '@angular/router';
var MyaccountComponent = /** @class */ (function () {
    function MyaccountComponent(actualizar, router) {
        this.actualizar = actualizar;
        this.router = router;
        this.id = null;
        this.usuario = "";
        this.nombre = "";
        this.apellido = "";
        this.password = "";
        this.correo = "";
        this.telefono = null;
        this.foto = "";
        this.genero = null;
        this.nacimiento = "";
        this.direccion = "";
        this.rol = null;
    }
    MyaccountComponent.prototype.ngOnInit = function () {
    };
    MyaccountComponent.prototype.update = function () {
        var obj = JSON.parse(localStorage.getItem('CurrentUser'), function (key, value) {
            if (key == "usuario") {
                this.usuario = value;
            }
        });
        this.actualizar.actualizar(this.usuario, this.nombre, this.apellido, this.password, this.telefono, this.foto, this.genero, this.nacimiento, this.direccion, this.rol, this.correo)
            .subscribe(function (res) {
            console.log();
        });
    };
    MyaccountComponent = __decorate([
        Component({
            selector: 'app-myaccount',
            templateUrl: './myaccount.component.html',
            styleUrls: ['./myaccount.component.scss']
        }),
        __metadata("design:paramtypes", [UpdateService, Router])
    ], MyaccountComponent);
    return MyaccountComponent;
}());
export { MyaccountComponent };
//# sourceMappingURL=myaccount.component.js.map