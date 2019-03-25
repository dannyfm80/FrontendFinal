import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RegistroAccidenteComponent } from './components/registro-accidente/registro-accidente.component';
import {APP_ROUTING} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import { PersonaComponent } from './components/persona/persona.component';
import { PersonaCrearComponent } from './components/persona-crear/persona-crear.component';
import { PersonaActualizarComponent } from './components/persona-actualizar/persona-actualizar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArtefactoComponent } from './components/artefacto/artefacto.component';
import { RegistroArtefactoComponent } from './components/registro-artefacto/registro-artefacto.component';
import { ArtefactoCrearComponent } from './components/artefacto-crear/artefacto-crear.component';
import { ReporteComponent } from './components/reporte/reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroAccidenteComponent,
    PersonaComponent,
    PersonaCrearComponent,
    PersonaActualizarComponent,
    ArtefactoComponent,
    RegistroArtefactoComponent,
    ArtefactoCrearComponent,
    ReporteComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
