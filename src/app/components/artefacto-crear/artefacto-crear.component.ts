import { Component, OnInit } from '@angular/core';
import {ArtefactosService} from '../../servicios/artefactos.service';
import {Artefacto} from '../../modelos/artefacto';
import {ActivatedRoute, Params} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-artefacto-crear',
  templateUrl: './artefacto-crear.component.html',
  styleUrls: ['./artefacto-crear.component.css']
})
export class ArtefactoCrearComponent implements OnInit {
    artefactoNew: Artefacto = {
      id: null,
      nombre: '',
      modelo: '',
      estado: '',
      cantidad: 1,
      codigoArtefacto: '',
      tipoArtefactoId: 1,
      ingreso: null,
    };
  constructor(private artefactosService: ArtefactosService,
              private route: ActivatedRoute,
              private routes: Router) { }

  ngOnInit() {
  }
  crearArtefacto() {
    this.artefactosService.createArtefacto(this.artefactoNew).subscribe( ress => {
      console.log(ress);
      // @ts-ignore
      this.routes.navigate(['/artefacto', ress.id]);
    }, error => console.log(error));
  }

}
