import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   private  _http = inject(HttpClient)
   private baseUrl: string = 'https://fakestoreapi.com/products'


   public getProducts():Observable<Iproduct[]> {
    return this._http.get<Iproduct[]>(`${this.baseUrl}`);
   }

   public getProdut(id: number):Observable<Iproduct>{
    return this._http.get<Iproduct>(`${this.baseUrl}/${id}`);
   }

}
