

import {Injectable} from '@angular/core';
import {Persona} from '../modelos/persona';
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
export class PersonasService {

  baseUrl = 'http://localhost:8080/personas';

  constructor(private http: HttpClient) {
  }

  getPersonas(): Observable<Persona[]> {
    return <Observable<Persona[]>>this.http.get(this.baseUrl );
  }

  getPersona(id: number): Observable<Persona> {
    return <Observable<Persona>>this.http.get(this.baseUrl + '/' + id);
  }

  getFeaturedItem(): Observable<Persona> {
    return <Observable<Persona>>this.http.get(this.baseUrl + '?featured=true');
  }

  createPersona(persona: Persona) {
    const body = JSON.stringify(persona);
    const httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.baseUrl, body, httpOpciones).map( res => {
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


  deletePersona(llave: string) {
    const url = `${this.baseUrl}/${llave}`;
    return this.http.delete(url).map(
      res => res
    );
  }


}
