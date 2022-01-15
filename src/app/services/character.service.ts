import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private urlBase = `${environment.urlBase}`;

  constructor( private httpService: HttpClient ) { }

  getCharacters = () => {
    return this.httpService.get(`${this.urlBase}/character`).
      pipe(
        map( (resp:any) =>  resp.results)
      );
  }

  searchCharacter = (param: string) => {
    return this.httpService.get(`${this.urlBase}/character/?name=${param}`).
      pipe(
        map( (resp:any) =>  resp.results)
      );
  }
}
