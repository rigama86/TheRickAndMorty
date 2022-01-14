import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private urlBase = 'https://rickandmortyapi.com/api';

  constructor( private httpService: HttpClient ) { }

  getCharacters = () => {
    return this.httpService.get(`${this.urlBase}/character/?page=19`).
      pipe(
        map( (resp:any) =>  resp.results)
      );
  }
}
