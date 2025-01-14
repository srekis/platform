import { createAction, props } from '@ngrx/store';

export const SetCount = createAction(
  '[Action] Set Count', props<{ count: number }>(),
);

export const GetCount = createAction(
  '[Action] Get Count',
);
