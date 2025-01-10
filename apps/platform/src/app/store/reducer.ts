import { createReducer, on } from '@ngrx/store';
import { GetCount, SetCount } from './action';

export interface AppStateInterface {
  counter: number;
}

export const initialState: AppStateInterface = {
  counter: 0,
};

export const reducer = createReducer(
  initialState,
  on(SetCount, (state, { count }) => {
    console.log('SetCount', count);
    return { ...state, counter: count }
  }),
  on(GetCount, (state) => ({ ...state }))
);
