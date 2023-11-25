import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {NgOptimizedImage} from "@angular/common";
import { RutinasComponent } from './components/rutinas/rutinas.component';
import { RutinasIntermedioComponent } from './components/rutinas/rutinas-intermedio/rutinas-intermedio.component';
import { RutinasAvanzadoComponent } from './components/rutinas/rutinas-avanzado/rutinas-avanzado.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DesafiosComponent } from './components/desafios/desafios.component';
import { DesafiosIntermedioComponent } from './components/desafios/desafios-intermedio/desafios-intermedio.component';
import { DesafiosAvanzadoComponent } from './components/desafios/desafios-avanzado/desafios-avanzado.component';
import { ForoSocialComponent } from './components/foro-social/foro-social.component';
import { MisPublicacionesComponent } from './components/mis-publicaciones/mis-publicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    RutinasComponent,
    RutinasIntermedioComponent,
    RutinasAvanzadoComponent,
    PerfilComponent,
    DesafiosComponent,
    DesafiosIntermedioComponent,
    DesafiosAvanzadoComponent,
    ForoSocialComponent,
    MisPublicacionesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
