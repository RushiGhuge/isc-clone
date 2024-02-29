import { createAction, props } from "@ngrx/store";

export const addData = createAction('[Data] addData', props<{ value: any }>())
export const addFilteredData = createAction('[Data] addFilteredData', props<{ value: any }>())
export const addInFilter = createAction('[Data] addInFilter', props<{ value: string }>())
export const searchFilter = createAction('[Data] searchFilter', props<{ value: string }>())
export const removeInFilter = createAction('[Data] removeInFilter', props<{ value: number }>())
export const removeAllFilters = createAction('[Data] removeAllFilters')

