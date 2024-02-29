import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  
})


export class FetchUniversityDataService {

  constructor(private http: HttpClient) { }

  fetchUniversityList() {
    // return 'hi'
    return this.http.get('https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json')
  }

}
