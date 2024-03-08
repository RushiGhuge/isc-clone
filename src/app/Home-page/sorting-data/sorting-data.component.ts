import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addInFilter, removeInFilter } from '../../../Store/iscData.action';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-sorting-data',
  standalone: true,
  imports: [],
  templateUrl: './sorting-data.component.html',
  styleUrl: './sorting-data.component.css',
})
export class SortingDataComponent {
  filterData: string[] = [];

  countries = [
    'Australia',
    'Austria',
    'Belgium',
    'Bulgaria',
    'Canada',
    'China',
    'Colombia',
    'Costa Rica',
    'Croatia',
    'Czech Republic',
    'Denmark',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Iceland',
    'India',
    'Indonesia',
    'Ireland',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Lebanon',
    'Malaysia',
    'Mexico',
    'Morocco',
    'Netherlands',
    'New Zealand',
    'Norway',
    'Poland',
    'Portugal',
    'Qatar',
    'Saudi Arabia',
    'Serbia',
    'Singapore',
    'Slovenia',
    'South Africa',
    'Spain',
    'Sweden',
    'Switzerland',
    'Thailand',
    'Tunisia',
    'Turkey',
    'United Arab Emirates',
    'United Kingdom',
    'United States of America',
  ];

  disciplines = [
    'Agriculture',
    'Anthropology and Archaeology',
    'Architecture',
    'Arts',
    'Biology',
    'Business and Management',
    'Chemistry',
    'Computer Science',
    'Creative Tech',
    'Design',
    'Digital Media',
    'Divinity and Religion',
    'Earth and Marine Science',
    'Economics',
    'Education and Literacy',
    'Engineering and Technology',
    'Environmental Studies and Forestry',
    'Family and Consumer Science',
    'Film/TV/Audio',
    'Fine Arts',
    'Geography',
    'History',
    'Hospitality, Leisure and Tourism',
    'Interdisciplinary Studies',
    'Journalism, Media Studies and Communication',
    'Law',
    'Library and Museum Studies',
    'Linguistics and Languages',
    'Logistics and Transportation',
    'Mathematics',
    'Medicine',
    'Military science',
    'Others',
    'Performing Arts',
    'Philosophy',
    'Photography',
    'Physics',
    'Political Science',
    'Psychology',
    'Public Administration',
    'Social work',
    'Sociology',
    'Space Science',
    'Sports and Recreation',
    'Statistics',
    'Systems Science',
  ];

  degrees = [
    'Masters',
    'Bachelors',
    'Doctorate',
    'Associate',
    'Professional Certificate',
    'Diploma',
    'Post Graduate Diploma',
    'Undergraduate Certificate',
    'Graduate Certificate',
    'Post Graduate Certificate',
  ];

  PartnerShip = ['Partner', ' Non Partner'];

  tiutionFee = [
    'All',
    '30,000 USD/Year or Less',
    '50,000 USD/Year or Less',
    '70,000 USD/Year or Less',
    '90,000 USD/Year or Less',
  ];

  sortingSubscription = new Subscription();

  // functions

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.sortingSubscription = this.store
      .select('IscData')
      .subscribe((s) => (this.filterData = s.filters));
  }

  // add and remove from filterd array Function...
  filterAddDelete(event: any) {
    if (event.target.checked) {
      this.store.dispatch(addInFilter({ value: event.target.value }));
    } else {
      let index = this.filterData.indexOf(event.target.value);
      this.store.dispatch(removeInFilter({ value: index }));
    }
  }

  ngOnDestroy(): void {
    this.sortingSubscription.unsubscribe();
  }
}
