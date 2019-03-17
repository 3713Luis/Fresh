import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private usuariosService: UsuariosService) { }
  user: any = [];

  ngOnInit() {

     this.usuariosService.getUserAll().subscribe(

      res => {

        this.user = res;
console.log(this.user)
      },
      err => console.log(err)

    );{

    }
  }



}
