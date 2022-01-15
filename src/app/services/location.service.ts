import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private urlBase = `${environment.urlBase}`;

  constructor( private httpService: HttpClient ) { }

  getEpisodes = () => {
    return this.httpService.get(`${this.urlBase}/location`).
      pipe(
        map( (resp:any) =>  resp.results)
      );
  }
}
