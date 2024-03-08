import { Component } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { SortingDataComponent } from '../sorting-data/sorting-data.component';
import { UniversityCardComponent } from '../university-card/university-card.component';
import { FetchUniversityDataService } from '../../Services/fetch-university-data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { addData, searchFilter } from '../../../Store/iscData.action';
import { MatIcon } from '@angular/material/icon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-explore-schools',
  standalone: true,
  imports: [
    MatIcon,
    MatPaginatorModule,
    FiltersComponent,
    SortingDataComponent,
    UniversityCardComponent,
    HttpClientModule,
  ],
  templateUrl: './explore-schools.component.html',
  styleUrl: './explore-schools.component.css',
  providers: [HttpClientModule, HttpClient, FetchUniversityDataService],
})




export class ExploreSchoolsComponent {
  universityArray: any[] = [];
  currentList: any[] = [];
  fetchDataSubscription = new Subscription();
  dataSubscription = new Subscription();



  // call the fetch data sercive and inject the store as well
  constructor(
    private fetchData: FetchUniversityDataService,
    private store: Store<any>
  ) {
    this.fetchDataSubscription = this.fetchData
      .fetchUniversityList()
      .subscribe((s) => this.store.dispatch(addData({ value: s })));
  }

  // select the store for rendering on UI...
  ngOnInit(): void {
    this.dataSubscription =  this.store.select('IscData').subscribe((s) => {
      this.universityArray = s.filteredList;
      this.currentList = s.filteredList.slice(0, 10);
    });
  }

  // this function will work when the pagination page change...
  onPageChange(event: any) {
    console.log(event);
    let startPage = event.pageIndex * 10;
    this.currentList = this.universityArray.slice(
      startPage,
      startPage + event.pageSize
    );
    console.log(this.currentList);
    console.log(startPage);
  }

  onSearch(event: any) {
    console.log(event.target.value);
    this.store.dispatch(searchFilter({ value: event.target.value }));
  }

  // unsubscribe the Subscription...
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.fetchDataSubscription.unsubscribe();
    this.dataSubscription.unsubscribe()
    
  }
}
