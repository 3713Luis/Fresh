import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SliderComponent} from  './components/slider/slider.component'
import {LoginComponent } from './components/login/login.component'
import { RegistrarUsuarioComponent } from  './components/registrar-usuario/registrar-usuario.component'

const routes: Routes = [

  {
path: '',
redirectTo: '/slider',
pathMatch: 'full'
  },
  {
    path: 'slider',
    component: SliderComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistrarUsuarioComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
