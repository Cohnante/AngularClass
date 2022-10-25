import { LoginComponent } from './components/login/login.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MisionComponent } from './components/mision/mision.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'Registro', component:RegistroComponent},
  {path:'Mision', component:MisionComponent},
  {path:'Cursos', component:CursosComponent},
  {path:'', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
