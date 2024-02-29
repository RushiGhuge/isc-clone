import { TestBed } from '@angular/core/testing';

import { FetchUniversityDataService } from './fetch-university-data.service';

describe('FetchUniversityDataService', () => {
  let service: FetchUniversityDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchUniversityDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
