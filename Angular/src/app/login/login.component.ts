import { Component, OnInit } from '@angular/core';
import { NodoService } from 'src/app/servicio/login.service';
import { login } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usuario: NodoService, private router: Router) { }

  ngOnInit() {
  }

  username: string = "";
  password: string = "";

  inicio() {
    this.usuario.login(this.username, this.password)
      .subscribe((res: login) => {
        //console.log(res);

         if (res.res) {
          this.username = "";
          this.password = "";
          this.usuario.setUsuario(res);
          this.router.navigate(["cloud"]);
        }
        else {

        } 
      })
  }
}

