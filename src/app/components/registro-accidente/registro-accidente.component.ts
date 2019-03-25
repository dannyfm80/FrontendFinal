import { Component, OnInit } from '@angular/core';
import {PersonasService} from '../../servicios/personas.service';
import {Persona} from '../../modelos/persona';

@Component({
  selector: 'app-registro-accidente',
  templateUrl: './registro-accidente.component.html',
  styleUrls: ['./registro-accidente.component.css']
})
export class RegistroAccidenteComponent implements OnInit {

  personal: Persona[];

  constructor( private personasService: PersonasService) { }

  ngOnInit() {
    this.loadPersonas();
  }

  loadPersonas(): void {
    this.personasService.getPersonas().subscribe(personas => this.personal = personas);
  }

  eliminarPersona(id: any) {
    this.personasService.deletePersona(id).subscribe( data => {
      if (data) {
        console.error(data);
      } else {
        console.log('funcionaaMIO');
        this.personal = this.personal.filter(item => item.id != id);

      }
      console.log(data);
    }, error => console.log(error));
  }
}
