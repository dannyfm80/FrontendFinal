

import {Injectable} from '@angular/core';
import {Persona} from '../modelos/persona';
import {Artefacto} from '../modelos/artefacto';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/delay';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArtefactosService {

  baseUrl = 'http://localhost:8080/artefactos';

  constructor(private http: HttpClient) {
  }

  getArtefactos(): Observable<Artefacto[]> {
    return <Observable<Artefacto[]>>this.http.get(this.baseUrl );
  }

    getArtefacto(id: number): Observable<Artefacto> {
    return <Observable<Artefacto>>this.http.get(this.baseUrl + '/' + id);
  }

  getFeaturedItem(): Observable<Artefacto> {
    return <Observable<Artefacto>>this.http.get(this.baseUrl + '?featured=true');
  }
  // create
  createArtefacto(artefacto: Artefacto) {
    const body = JSON.stringify(artefacto);
    const httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.baseUrl, body, httpOpciones).map( res => {
      console.log('yamillllll');
      console.log(res);
      return res;
    });
  }

  updatePersona(persona: Persona, llave: string) {
    const body = JSON.stringify(persona);
    const httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${this.baseUrl}/${llave}.json`;
    console.log('la url es');
    console.log(url);

    return this.http.put(this.baseUrl, body, httpOpciones).map( res => {
      console.log('resultadoo');
      console.log(res);
      return res;
    });

  }



  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'http://localhost:8080/items/1/image';
    const httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    };
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    console.log(formData);
    return this.http
      .post(endpoint, formData, httpOpciones)
      .map(() => true);
  }


  deleteArtefacto(llave: string) {
    const url = `${this.baseUrl}/${llave}`;
    return this.http.delete(url).map(
      res => res
    );
  }


}
