import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RutinasComponent } from './components/rutinas/rutinas.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DesafiosComponent } from './components/desafios/desafios.component';
import { RutinasIntermedioComponent } from './components/rutinas/rutinas-intermedio/rutinas-intermedio.component';
import { RutinasAvanzadoComponent } from './components/rutinas/rutinas-avanzado/rutinas-avanzado.component';
import { DesafiosIntermedioComponent } from './components/desafios/desafios-intermedio/desafios-intermedio.component';
import { DesafiosAvanzadoComponent } from './components/desafios/desafios-avanzado/desafios-avanzado.component';

const routes: Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'iniciarSesion', component: IniciarSesionComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'rutinas/RutinaPrincipiante', component: RutinasComponent },
    { path: 'rutinas/RutinaIntermedio', component: RutinasIntermedioComponent },
    { path: 'rutinas/RutinaAvanzado', component: RutinasAvanzadoComponent },
    { path: 'desafio/DesafioPrincipiante', component: DesafiosComponent },
    { path: 'desafio/DesafioIntermedio', component: DesafiosIntermedioComponent },
    { path: 'desafio/DesafioAvanzado', component: DesafiosAvanzadoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'homepage' }
];


export const app_routing = RouterModule.forRoot(routes);