import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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
}
