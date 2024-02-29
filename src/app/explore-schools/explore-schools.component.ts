import { Component } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { SortingDataComponent } from '../sorting-data/sorting-data.component';
import { UniversityCardComponent } from '../university-card/university-card.component';
import { FetchUniversityDataService } from '../Services/fetch-university-data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { addData, searchFilter } from '../../store/iscData.action';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-explore-schools',
  standalone: true,
  imports: [MatIcon, MatPaginatorModule, FiltersComponent, SortingDataComponent, UniversityCardComponent, HttpClientModule],
  templateUrl: './explore-schools.component.html',
  styleUrl: './explore-schools.component.css',
  providers: [HttpClientModule, HttpClient, FetchUniversityDataService]
})


export class ExploreSchoolsComponent {

  universityArray: any[] = []
  currentList: any[] = []

  constructor(private fetchData: FetchUniversityDataService, private store: Store<any>) {
    this.fetchData.fetchUniversityList().subscribe(s => this.store.dispatch(addData({ value: s })))
  }

  ngOnInit(): void {
    this.store.select('IscData').subscribe(s => {
      this.universityArray = s.filteredList
      this.currentList = s.filteredList.slice(0, 10);
    })
  }


  onPageChange(event: any) {
    console.log(event);
    let startPage = event.pageIndex * 10
    this.currentList = this.universityArray.slice(startPage, startPage + event.pageSize)
    console.log(this.currentList);
    console.log(startPage);
  }

  onSearch(event: any) {
    console.log(event.target.value);
    this.store.dispatch(searchFilter({ value: event.target.value }))
  }

}
