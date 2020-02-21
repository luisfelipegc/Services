import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get('http://openlibrary.org/people/george08/lists.json');
  }

  getCars() {
    return this.http.get('https://parallelum.com.br/fipe/api/v1/carros/marcas');
  }

  getCar(codigo) {
    return this.http.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigo}/modelos`);
  }
}
