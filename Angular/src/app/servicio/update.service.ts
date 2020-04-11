import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  actualizar( usuario: string, nombre: string, apellido: string, password: string, telefono: number, foto: string, genero: number, nacimiento: string, direccion: string, rol: number, correo: string) {
    
    const url = "http://localhost:3000/api/usuario/update";

    return this.http.put(
      url,
      {
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
      },
      { headers: this.headers }
    ).pipe(map(data => data));

  }
}
