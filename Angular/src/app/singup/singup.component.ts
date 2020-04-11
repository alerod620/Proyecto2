import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/servicio/register.service';
import { registro } from '../models/registro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {


  constructor(private register: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  nombre: string = "";
  apellido: string = "";
  password: string = "";
  correo: string = "";
  telefono: number = null;
  foto: string = "";
  genero: number = null;
  nacimiento: string = "";
  registro: string = "";
  direccion: string = "";
  rol: number = null;

  singup() {
    this.registro = new Date().toLocaleDateString();
    this.register.register(this.nombre, this.apellido, this.password, this.telefono, this.foto, this.genero, this.nacimiento, this.registro, this.direccion, this.rol, this.correo)
      .subscribe((res: registro) => {
        console.log();
      })

  }

}
