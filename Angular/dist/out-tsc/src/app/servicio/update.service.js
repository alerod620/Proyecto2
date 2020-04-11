var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
var UpdateService = /** @class */ (function () {
    function UpdateService(http) {
        this.http = http;
        this.headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
    }
    UpdateService.prototype.actualizar = function (usuario, nombre, apellido, password, telefono, foto, genero, nacimiento, direccion, rol, correo) {
        var url = "http://localhost:3000/api/usuario/update";
        return this.http.post(url, {
            "usuario": usuario,
            "nombre": nombre,
            "apellido": apellido,
            "password": password,
            "telefono": telefono,
            "foto": foto,
            "genero": genero,
            "nacimiento": nacimiento,
            "direccion": direccion,
            "rol": rol,
            "correo": correo
        }, { headers: this.headers }).pipe(map(function (data) { return data; }));
    };
    UpdateService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], UpdateService);
    return UpdateService;
}());
export { UpdateService };
//# sourceMappingURL=update.service.js.map