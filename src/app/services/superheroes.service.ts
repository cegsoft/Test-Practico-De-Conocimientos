import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AllData } from '../model/superheroe';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  url: string = environment.url;

  constructor(private http: HttpClient) {

  }


  getOneTipeSuperHero(puedoVolar: boolean): Observable<AllData> {

    return this.http.get<AllData>(`${this.url}?puedeVolar=${puedoVolar}`).pipe();
  }

  getAllSuperHero(): Observable<AllData> {

    return this.http.get<AllData>(`${this.url}`).pipe();
  }


  getDetailsSuperHero(id: number): Observable<DataDetailSuperheroe>  {
  return this.http.get<DataDetailSuperheroe>(`${this.url}/${id}`).pipe();
  }





}
