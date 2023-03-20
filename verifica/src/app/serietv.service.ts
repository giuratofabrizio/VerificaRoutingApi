import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerietvService {

  constructor(private http:HttpClient) { }

SearchSerie(query:string){
  const url= 'https://api.tvmaze.com/search/shows?q={query}'
  let ObsSerie= this.http.get(url)
  return ObsSerie
}

GetSerie(id:string): Observable<any>{
  const url= 'https://api.tvmaze.com/shows/{id}'
  return this.http.get(url)
}
}
