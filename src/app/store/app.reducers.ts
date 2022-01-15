import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
	characters: reducers.CharactersState,
	episodes: reducers.EpisodesState
	locations: reducers.LocationsState

}

export const appReducers: ActionReducerMap<AppState> =  {
	characters: reducers.charactersReducer,
	episodes: reducers.episodesReducer,
	locations: reducers.locationsReducer
}