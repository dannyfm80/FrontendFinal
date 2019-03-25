import { Component, OnInit } from '@angular/core';
import {PersonasService} from '../../servicios/personas.service';
import {Persona} from '../../modelos/persona';
import {ActivatedRoute, Params} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-persona-actualizar',
  templateUrl: './persona-actualizar.component.html',
  styleUrls: ['./persona-actualizar.component.css']
})
export class PersonaActualizarComponent implements OnInit {

  elId: any;
  personaAct: Persona = {
    id: null,
  nombres: '',
  apellidos: '',
  telefono: '',
  direccion: '',
  email: '',
  sexo: '',
  nacimiento: '',
  ci: '',
  nacionalidad: ''
  };

constructor(private personasService: PersonasService,
            private route: ActivatedRoute,
            private routes: Router) {
    this.route.params.subscribe( parametros => this.elId = parametros['id']);
  }

  ngOnInit() {
    this.personasService.getPersona(this.elId).subscribe( persona => {
        this.personaAct = persona;
      }
    );
  }

  llamarUpdate(): void {
    this.personaAct.id = this.elId;
    console.log(this.personaAct);
    console.log(this.elId);
    this.personasService.updatePersona(this.personaAct, this.elId).subscribe( data => {
      console.log(data);
      // @ts-ignore
      this.routes.navigate(['/persona', data.id]);
    }, error => console.log(error));
  }

}
