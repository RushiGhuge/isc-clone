import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addFilteredData, addInFilter, removeAllFilters, removeInFilter } from "./iscData.action";
import { map, tap, withLatestFrom } from "rxjs";
import { Store, select } from "@ngrx/store";



@Injectable()
export class IscEffects {
    constructor(private actions$: Actions, private store: Store<any>) { }

    loadData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addInFilter, removeAllFilters, removeInFilter),
            withLatestFrom(this.store.pipe(select(state => state))),
            tap(([action, state]) => {

                let filterStr = state.IscData.filters.join('')
                if (filterStr === '') {
                    this.store.dispatch(addFilteredData({ value: state.IscData.universityList }))
                }
                else {
                    let data = state.IscData.universityList.filter((ele: any, id: any) => filterStr.includes(ele.country) || filterStr.includes(ele.name))
                    this.store.dispatch(addFilteredData({ value: data }))   
                }
            }),

        ), { dispatch: false }
    )

}