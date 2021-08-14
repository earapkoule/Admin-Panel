import { createReducer, on, Action } from "@ngrx/store";
import { setEarthquakes } from './earthquakes.actions';

export interface EarthquakesState {
    earthquakes: any[];
}

const initialState: EarthquakesState = {
    earthquakes: []
};

const earthquakesReducerHelper = createReducer(
    initialState,
    on(setEarthquakes, (state, action) => {
        return {
            earthquakes: [...action.earthquakes]
        };
    })
);

export function earthquakesReducer(state: EarthquakesState, action: Action) {
    return earthquakesReducerHelper(state, action);
}
