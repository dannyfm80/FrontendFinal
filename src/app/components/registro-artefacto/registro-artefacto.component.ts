import { Component, OnInit } from '@angular/core';
import {ArtefactosService} from '../../servicios/artefactos.service';
import {Artefacto} from '../../modelos/artefacto';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-registro-artefacto',
  templateUrl: './registro-artefacto.component.html',
  styleUrls: ['./registro-artefacto.component.css']
})
export class RegistroArtefactoComponent implements OnInit {
  artefactol: Artefacto[];
  constructor(private artefactosService: ArtefactosService) { }

  ngOnInit() {
    this.loadArtefactos();
  }
  loadArtefactos(): void {
    this.artefactosService.getArtefactos().subscribe(art => this.artefactol = art);
  }

  eliminarArtefacto(id: any) {
    this.artefactosService.deleteArtefacto(id).subscribe( data => {
      if (data) {
        console.error(data);
      } else {
        console.log('funcionaaMIO');
        this.artefactol = this.artefactol.filter(item => item.id != id);

      }
      console.log(data);
    }, error => console.log(error));
  }

  captureScreen() {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }

}
