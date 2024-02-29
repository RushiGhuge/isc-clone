import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Store } from '@ngrx/store';
import { removeAllFilters, removeInFilter } from '../../store/iscData.action';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatIconModule, MatButtonToggleModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})


export class FiltersComponent {
  filters = ['India', 'US', 'Japan', 'Nepal', 'Dummy']

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select('IscData').subscribe(s => {
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

}
