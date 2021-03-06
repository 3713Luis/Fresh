import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

import { User } from '../models/usuarios'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUserAll(){
    return this.http.get(`${this.API_URI}/login`);
  }
  getUser(id: string){
    return this.http.get(`${this.API_URI}/login/${id}`);

  }
  saveUser(user: User){

    return this.http.post(`${this.API_URI}/login/`, user);
  }

  deleteUser(id: string){
    return this.http.delete(`${this.API_URI}/login/${id}`);
  }

  updateUser(id: string,updatedUser: User): Observable<User>{
    return this.http.put(`${this.API_URI}/login/${id}`, updatedUser);
  }
}
