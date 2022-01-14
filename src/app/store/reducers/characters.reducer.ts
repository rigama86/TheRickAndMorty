import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { getCharacters, getCharacterSuccess, getCharacterError } from '../actions';
import { Character } from '../../models/character.model';

export interface CharactersState {
	characters: Character[],
	loaded: boolean,
	loading: boolean,
	error: any
};

export const charactersInitialState: CharactersState = {
	characters: [],
	loaded: false,
	loading: false,
	error: null
};

const _charactersReducer = createReducer( charactersInitialState,
	on( getCharacters, (state: any) => ({ ...state, loading: true })),

	on ( getCharacterSuccess, (state, { characters }) => ({
		...state,
		loading: false,
		loaded: true,
		characters: [ ...characters ]
	})),

	on ( getCharacterError, (state, { payload }) => ({
		...state,
		loading: false,
		loaded: true,
		error: {
			url: payload.url,
			name: payload.name,
			message: payload.message
		}
	})),

);

export function charactersReducer( state: any, action:any ) {
	return _charactersReducer(state, action);
}