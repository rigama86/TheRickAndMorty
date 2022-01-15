import { createReducer, on } from '@ngrx/store';
import { Episodes } from '../../models/episodes.model';
import { getEpisodes, getEpisodesSuccess, getEpisodesError } from '../actions/episodes.actions';


export interface EpisodesState {
	episodes: Episodes[],
	loaded: boolean,
	loading: boolean,
	error: any
};

export const episodesInitialState: EpisodesState = {
	episodes: [],
	loaded: false,
	loading: false,
	error: null
};

const _episodesReducer = createReducer( episodesInitialState,
	on( getEpisodes, (state: any) => ({ ...state, loading: true })),

	on ( getEpisodesSuccess, (state, { episodes }) => ({
		...state,
		loading: false,
		loaded: true,
		episodes: [ ...episodes ]
	})),

	on ( getEpisodesError, (state, { payload }) => ({
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

export function episodesReducer( state: any, action:any ) {
	return _episodesReducer(state, action);
}