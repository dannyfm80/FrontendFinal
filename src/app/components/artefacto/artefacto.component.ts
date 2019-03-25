import { Component, OnInit } from '@angular/core';
import {ArtefactosService} from '../../servicios/artefactos.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Artefacto} from '../../modelos/artefacto';
import {Persona} from '../../modelos/persona';


@Component({
  selector: 'app-artefacto',
  templateUrl: './artefacto.component.html',
  styleUrls: ['./artefacto.component.css']
})
export class ArtefactoComponent implements OnInit {
  elId: any;
  artefacto: Artefacto;

  constructor(private artefactoService: ArtefactosService,
              private route: ActivatedRoute) {
    this.route.params.subscribe( parametros => this.elId = parametros['id']);
  }

  ngOnInit() {
    this.artefactoService.getArtefacto(this.elId).subscribe(art => {
      this.artefacto = art;
    });
  }

}
