import { Component, OnInit } from '@angular/core';
import { UpdateService } from 'src/app/servicio/update.service';
import { update } from '../models/update';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {

  constructor(private actualizar: UpdateService, private router: Router) { }

  ngOnInit() {
  }
  id: number = null;
  usuario: string = "";
  nombre: string = "";
  apellido: string = "";
  password: string = "";
  correo: string = "";
  telefono: number = null;
  foto: string = "";
  genero: number = null;
  nacimiento: string = "";
  direccion: string = "";
  rol: number = null;


  
  update() {
    var obj = JSON.parse(localStorage.getItem('CurrentUser'), function (key, value) {
      if (key == "usuario") {
          this.usuario = value;
      }
  })
    this.actualizar.actualizar( this.usuario, this.nombre, this.apellido, this.password, this.telefono, this.foto, this.genero, this.nacimiento, this.direccion, this.rol, this.correo)
      .subscribe((res: update) => {
        console.log();
      })

  }


}
