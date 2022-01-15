import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as episodesActions from '../actions/episodes.actions'
import { tap, mergeMap, map, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { EpisodesService } from '../../services/episodes.service';
import { getEpisodes } from '../actions/episodes.actions';

@Injectable()
export class EpisodesEffects {
	constructor(
		private action$: Actions,
		private episodesServices: EpisodesService
	) { }

	loadEpisodes$ = createEffect(
		() => this.action$.pipe(
			ofType(episodesActions.getEpisodes),
			mergeMap(
				() => this.episodesServices.getEpisodes()
					.pipe(
						map(episodes => episodesActions.getEpisodesSuccess({ episodes: episodes })),
						catchError(err => of(episodesActions.getEpisodesError({ payload: err })))
					)
			)
		)
	);
}