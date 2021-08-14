import { createAction, props } from '@ngrx/store';

export const setEarthquakes = createAction('[Earthquakes] Set Earthquakes', props<{earthquakes: any[]}>());
