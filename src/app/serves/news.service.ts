import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getTopheadLines(){ 



 return  this.http.get('https://backend-suplementos.herokuapp.com/suplementos')


}

}
