import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Store } from '@ngrx/store';
import { removeAllFilters, removeInFilter } from '../../../Store/iscData.action';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatIconModule, MatButtonToggleModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})


export class FiltersComponent {
  filters = []

  constructor(private store: Store<any>) { }
  filterSubscription = new Subscription()

  ngOnInit(): void {
    this.filterSubscription = this.store.select('IscData').subscribe(s => {
      this.filters = s.filters;
    })
  }

  removeFilter(id: number) {
    // this.filters.splice(id, 1)
    this.store.dispatch(removeInFilter({ value: id }))
  }

  removeAllFilters(){
    this.store.dispatch(removeAllFilters())
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe()
  }

}
