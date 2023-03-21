import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private httpClient : HttpClient) { }
  private endPoint:string = "https://restcountries.com/v3.1/";

  buscarPais(nombre:string): Observable<Pais[]>{
    return this.httpClient.get<Pais[]>(this.endPoint + "name/" + nombre);
  }
  
  buscarPaisId(id: string): Observable<Pais>{
    return this.httpClient.get<Pais>(this.endPoint + "alpha/" + id);
  }

  buscarContinente(cont: string): Observable<Pais>{
    return this.httpClient.get<Pais>(`${this.endPoint}region/${cont}`);
  }

  buscarCapital(cap:string): Observable<Pais>{
    return this.httpClient.get<Pais>(`${this.endPoint}capital/${cap}`);
  }
}

