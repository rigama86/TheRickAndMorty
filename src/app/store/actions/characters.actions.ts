import { createAction, props } from "@ngrx/store";
import { Character } from '../../models/character.model';

export const getCharacters = createAction('[Characters] Load Characters');

export const getCharacterSuccess = createAction(
	'[Characters] Load Characters Success',
	props<{characters: Character[]}>()
);

export const getCharacterError = createAction(
	'[Characters] Load Characters Error',
	props<{payload: any}>()
);