import { Component, OnInit } from '@angular/core';
import {PersonasService} from '../../servicios/personas.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Persona} from '../../modelos/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  elId: any;
  persona: Persona;

  constructor(private personaService: PersonasService,
              private route: ActivatedRoute) {
    this.route.params.subscribe( parametros => this.elId = parametros['id']);
  }

  ngOnInit() {
    this.personaService.getPersona(this.elId).subscribe( persona => {
      this.persona = persona;
      }
    );
  }

}
