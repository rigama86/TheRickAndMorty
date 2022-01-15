import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as locationsActions from '../actions/locations.actions'
import { tap, mergeMap, map, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { getLocations } from '../actions/locations.actions';
import { LocationService } from '../../services/location.service';


@Injectable()
export class LocationsEffects {
	constructor(
		private action$: Actions,
		private locationsServices: LocationService
	) { }

	loadLocation$ = createEffect(
		() => this.action$.pipe(
			ofType(locationsActions.getLocations),
			mergeMap(
				() => this.locationsServices.getEpisodes()
					.pipe(
						map(locations => locationsActions.getLocationsSuccess({ locations: locations })),
						catchError(err => of(locationsActions.getLocationsError({ payload: err })))
					)
			)
		)
	);
}