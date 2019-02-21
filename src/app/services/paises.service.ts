import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  urlEndoint = 'https://restcountries.eu/rest/v2/lang/es';
  constructor(private http: HttpClient) { }

  getPaises() {
      return this.http.get(this.urlEndoint);
  }
}
