import { createAction, props } from "@ngrx/store";
import { Location } from '../../models/location.model';

export const getLocations = createAction('[Locations] Load Locations');

export const getLocationsSuccess = createAction(
	'[Location] Load Locations Success',
	props<{locations: Location[]}>()
);

export const getLocationsError = createAction(
	'[Location] Load Locations Error',
	props<{payload: any}>()
);