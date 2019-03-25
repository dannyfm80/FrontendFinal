import {RouterModule, Routes} from '@angular/router';

// @ts-ignore
import {RegistroAccidenteComponent} from './components/registro-accidente/registro-accidente.component';
import {PersonaComponent} from './components/persona/persona.component';
import {PersonaActualizarComponent} from './components/persona-actualizar/persona-actualizar.component';
import {PersonaCrearComponent} from './components/persona-crear/persona-crear.component';
import {ArtefactoComponent} from './components/artefacto/artefacto.component';
import {RegistroArtefactoComponent} from './components/registro-artefacto/registro-artefacto.component';
import {ArtefactoCrearComponent} from './components/artefacto-crear/artefacto-crear.component';
import {ReporteComponent} from './components/reporte/reporte.component';

export const routes: Routes = [
  {path: 'registroAccidente', component: RegistroAccidenteComponent},
  {path: 'registroArtefacto', component: RegistroArtefactoComponent},
  {path: 'registroPersona', component: PersonaCrearComponent},
  {path: 'registroArtefactos', component: ArtefactoCrearComponent},
  {path: 'reporte', component: ReporteComponent},
  {path: 'persona/:id', component: PersonaComponent},
  {path: 'artefacto/:id', component: ArtefactoComponent},
  {path: 'registroArtefacto', component: ArtefactoComponent},
  {path: 'personaActualizar/:id', component: PersonaActualizarComponent},
  {path: '**', redirectTo: 'registroArtefacto', pathMatch: 'full'}
];

export const APP_ROUTING =  RouterModule.forRoot(routes);
