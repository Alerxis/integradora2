import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjusteComponent } from './components/ajuste/ajuste.component';
import { EditarCodeComponent } from './components/editar-code/editar-code.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { FuncionComponent } from './components/funcion/funcion.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SobreComponent } from './components/sobre/sobre.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'historial', component: HistorialComponent},
  { path: 'home', component: HomeComponent},
  { path: 'funcion', component: FuncionComponent},
  { path: 'estadisticas', component: EstadisticasComponent},
  { path: 'editar', component: EditarCodeComponent},
  { path: 'ajuste', component: AjusteComponent},
  { path: 'sobre', component: SobreComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
