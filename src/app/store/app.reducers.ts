import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
	characters: reducers.CharactersState,
	character: reducers.CharactersState

}

export const appReducers: ActionReducerMap<AppState> =  {
	characters: reducers.charactersReducer,
	character: reducers.charactersReducer
}