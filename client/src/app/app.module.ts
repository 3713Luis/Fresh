import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { SliderComponent } from './components/slider/slider.component';
import { LoginComponent } from './components/login/login.component';

import { UsuariosService } from './services/usuarios.service'; 
import { FormsModule } from '@angular/forms';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { FooterComponent } from './components/footer/footer.component';
import { DecoracionComponent } from './components/decoracion/decoracion.component';
import { AsesoriaComponent } from './components/asesoria/asesoria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegistrarUsuarioComponent,
    SliderComponent,
    LoginComponent,
    CatalogoComponent,
    CategoriasComponent,
    FooterComponent,
    DecoracionComponent,
    AsesoriaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

    UsuariosService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
