import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Character } from 'src/app/models/character.model';
import { getCharacters } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';


@Component({
  selector: 'app-view-characters',
  templateUrl: './view-characters.component.html',
  styleUrls: ['./view-characters.component.scss']
})
export class ViewCharactersComponent implements OnInit {
  characters : Character[] = [];

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('characters').subscribe(({ characters }) => {
      this.characters = characters;
    });
    this.store.dispatch( getCharacters() );
  }

}
