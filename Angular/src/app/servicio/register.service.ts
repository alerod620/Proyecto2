import { Injectable } from '@angular/core';
import { registro } from '../models/registro';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  register( nombre: string, apellido: string, password: string, telefono: number, foto: string, genero: number, nacimiento: string, registro: string, direccion: string, rol: number, correo: string) {
    const url = "http://localhost:3000/api/usuario/register";

    return this.http.post(
      url,
      {
        "nombre": nombre,
        "apellido": apellido,
        "password": password,
        "telefono": telefono,
        "foto": foto,
        "genero": genero,
        "nacimiento": nacimiento,
        "registro": registro,
        "direccion": direccion,
        "rol": rol,
        "correo": correo
      },
      { headers: this.headers }
    ).pipe(map(data => data));

  }
}
