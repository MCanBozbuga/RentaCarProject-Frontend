import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44389/api/brands/getall"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);   
    }
  }