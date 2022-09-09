import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewResponse } from '../interfaces';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(page:number,category:string){
    return this.http.get<NewResponse>
    (`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, {
      params: {
        page:page,
        category:category
      }
    })
    }
}
