import { Component, OnInit } from '@angular/core';
import {PersonasService} from '../../servicios/personas.service';
import {Persona} from '../../modelos/persona';
import {ActivatedRoute, Params} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-persona-crear',
  templateUrl: './persona-crear.component.html',
  styleUrls: ['./persona-crear.component.css']
})
export class PersonaCrearComponent implements OnInit {

  personaNew: Persona = {
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
              private routes: Router) { }

  ngOnInit() {
  }

  crearPersona() {
    this.personasService.createPersona(this.personaNew).subscribe( ress => {
      console.log(ress);
      // @ts-ignore
      this.routes.navigate(['/persona', ress.id]);
    }, error => console.log(error));
  }
}
