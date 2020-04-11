import { Injectable } from '@angular/core';
import { login } from '../models/login';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NodoService {

  constructor(private http: HttpClient) {

   
   }

   headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  login(username: string, password: string){
    const url = "http://localhost:3000/api/usuario/login";

    return this.http.post(
      url,
      {
        "username": username,
        "password": password
      },
      {headers: this.headers}
    ).pipe(map(data=>data));

  }

  setUsuario(user: login){
    let user_st = JSON.stringify(user);
    localStorage.setItem('CurrentUser', user_st);
  }

}