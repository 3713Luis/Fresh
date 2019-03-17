import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { User } from 'src/app/models/usuarios';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  user: User = {
    id: 0,
    log_user: '',
    log_password: '',
    status: '',
    created_at: new Date()
    
    };

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {

   

  }

  saveUser(){

    delete this.user.id;
    delete this.user.status;
    delete this.user.created_at;

    console.log(this.user);
  this.usuariosService.saveUser(this.user).subscribe
  (res => {
     console.log(res);
     
  },
  err => console.log(err)
  
  
  )
  }

}
