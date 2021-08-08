import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AjusteComponent } from './components/ajuste/ajuste.component';
import { EditarCodeComponent } from './components/editar-code/editar-code.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { FuncionComponent } from './components/funcion/funcion.component';
import { HistorialComponent } from './components/historial/historial.component';
import { LoginComponent } from './components/login/login.component';
import { SobreComponent } from './components/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    AjusteComponent,
    EditarCodeComponent,
    EstadisticasComponent,
    FuncionComponent,
    HistorialComponent,
    LoginComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
