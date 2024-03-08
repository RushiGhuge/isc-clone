import { createReducer, on } from "@ngrx/store"
import { addData, addFilteredData, addInFilter, removeAllFilters, removeInFilter, searchFilter } from "./iscData.action"

const initialStore = {
    universityList: [],
    filters: ['India'],
    filteredList: []
}

export const IscReducer = createReducer(
    initialStore,

    on(addData, (state, action) => {
        return { ...state, universityList: action.value, filteredList: action.value }
    }),

    on(addFilteredData, (state, action) => {
        console.log(action, state);
        return { ...state, filteredList: action.value }
    }),

    on(searchFilter, (state, action) => {
        console.log(action, state);
        return { ...state, filteredList: state.universityList.filter((item:any, id) => item.name.toLowerCase().includes(action.value.toLowerCase())) }
    }),

    on(addInFilter, (state, action) => {
        return { ...state, filters: [...state.filters, action.value] }
    }),

    on(removeInFilter, (state, action) => {
        return { ...state, filters: state.filters.filter((_, id) => id !== action.value) }
    }),

    on(removeAllFilters, (state, action) => {
        return { ...state, filters: [] }
    }),


)