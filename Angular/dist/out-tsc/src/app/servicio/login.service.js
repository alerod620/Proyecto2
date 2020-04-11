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
var NodoService = /** @class */ (function () {
    function NodoService(http) {
        this.http = http;
        this.headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
    }
    NodoService.prototype.login = function (username, password) {
        var url = "http://localhost:3000/api/usuario/login";
        return this.http.post(url, {
            "username": username,
            "password": password
        }, { headers: this.headers }).pipe(map(function (data) { return data; }));
    };
    NodoService.prototype.setUsuario = function (user) {
        var user_st = JSON.stringify(user);
        localStorage.setItem('CurrentUser', user_st);
    };
    NodoService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], NodoService);
    return NodoService;
}());
export { NodoService };
//# sourceMappingURL=login.service.js.map