import { ViaCepModel } from './../models/via-cep-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViaCepApiService {

  constructor(private http: HttpClient) { }

  getCep(cep: String){

    const urlGet = `${environment.urlApiViaCep}${cep}/json/`;
    return this.http.get<ViaCepModel>(urlGet);
  }
}


