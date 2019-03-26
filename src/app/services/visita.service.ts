import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Visita } from 'app/models/visita.model';

@Injectable()
export class VisitaService {
  baseUrl: string = 'https://academiaromanosapi.azurewebsites.net/api/visitas';

  constructor(private _http: HttpClient) {
  }

  listar(): Observable<Visita[]> {
    return this._http.get<Visita[]>(this.baseUrl);
  }

  createUser(user: Visita) {
    return this._http.post(this.baseUrl, user);
  }

  // updateUser(user: Visita) {
  //   return this.http.put(this.baseUrl + '/' + user.id, user);
  // }

  deleteUser(id: number) {
    return this._http.delete(this.baseUrl + '/' + id);
  }
}