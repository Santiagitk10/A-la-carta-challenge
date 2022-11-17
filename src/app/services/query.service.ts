import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {


  searchBaseUrl = "https://api.spoonacular.com/recipes/complexSearch"

  constructor(private http: HttpClient) { }




}
