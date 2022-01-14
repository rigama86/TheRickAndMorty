import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as charactersActions from '../actions/characters.actions'
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { CharacterService } from '../../services/character.service';
import { of } from 'rxjs';

@Injectable()
export class CharactersEffects {
	constructor(
		private action$: Actions,
		private charactersServices: CharacterService
	) { }

	loadCharacter$ = createEffect(
		() => this.action$.pipe(
			ofType(charactersActions.getCharacters),
			mergeMap(
				() => this.charactersServices.getCharacters()
					.pipe(
						map(characters => charactersActions.getCharacterSuccess({ characters: characters })),
						catchError(err => of(charactersActions.getCharacterError({ payload: err })))
					)
			)
		)
	);
}