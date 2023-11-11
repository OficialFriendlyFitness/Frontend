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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    RutinasComponent,
    RutinasIntermedioComponent,
    RutinasAvanzadoComponent
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
