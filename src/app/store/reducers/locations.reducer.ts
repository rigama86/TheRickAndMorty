import { createReducer, on } from '@ngrx/store';
import { Location } from '../../models/location.model';
import { getLocations, getLocationsSuccess, getLocationsError } from '../actions/locations.actions';


export interface LocationsState {
	locations: Location[],
	loaded: boolean,
	loading: boolean,
	error: any
};

export const locationsInitialState: LocationsState = {
	locations: [],
	loaded: false,
	loading: false,
	error: null
};

const _locationsReducer = createReducer( locationsInitialState,
	on( getLocations, (state: any) => ({ ...state, loading: true })),

	on ( getLocationsSuccess, (state, { locations }) => ({
		...state,
		loading: false,
		loaded: true,
		locations: [ ...locations ]
	})),

	on ( getLocationsError, (state, { payload }) => ({
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

export function locationsReducer( state: any, action:any ) {
	return _locationsReducer(state, action);
}