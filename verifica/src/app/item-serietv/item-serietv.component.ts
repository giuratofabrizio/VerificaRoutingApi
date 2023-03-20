import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SerietvService } from '../serietv.service';

@Component({
  selector: 'app-item-serietv',
  templateUrl: './item-serietv.component.html',
  styleUrls: ['./item-serietv.component.css']
})
export class ItemSerietvComponent {
routeObs!: Observable<ParamMap> 
serie!: any
constructor(
  private route: ActivatedRoute;
  private router: Router;
  private service: SerietvService;
  private location: Location;
){}

ngOnInIt()void:{
this.routeObs= this.route.ParamMap;
this.routeObs.subscribe(this.getRouterParam)
}

const getRouterParam= (params: ParamMap)=>
{
  let serieId = params.get('id');
  console.log(serieId);
  let Obs= this.service.getSerie(serieId!);
  obs
}
}
