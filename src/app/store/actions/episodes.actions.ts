import { createAction, props } from "@ngrx/store";
import { Episodes } from '../../models/episodes.model';

export const getEpisodes = createAction('[Episodes] Load Episodes');

export const getEpisodesSuccess = createAction(
	'[Episodes] Load Episodes Success',
	props<{episodes: Episodes[]}>()
);

export const getEpisodesError = createAction(
	'[Episodes] Load Episodes Error',
	props<{payload: any}>()
);