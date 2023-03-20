import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SerietvService } from '../serietv.service';

@Component({
  selector: 'app-search-serietv',
  templateUrl: './search-serietv.component.html',
  styleUrls: ['./search-serietv.component.css']
})
export class SearchSerietvComponent {
query!:string;
ObsSerie!: Observable<object>;
result!:any
results: any | undefined;

constructor(public serie:SerietvService){
}

submit(query:HTMLInputElement): void{
  if (!query.value){
    return;
  }
this.query=query.value;
this.ObsSerie= this.serie.SearchSerie(this.query);
this.ObsSerie.subscribe((data)=>{this.result=data; console.log(this.result)})
}
}
