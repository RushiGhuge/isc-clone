import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDetailPageComponent } from './university-detail-page.component';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

describe('UniversityDetailPageComponent', () => {
  let component: UniversityDetailPageComponent;
  let fixture: ComponentFixture<UniversityDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversityDetailPageComponent],
      declarations: [ UniversityDetailPageComponent ],
      providers: [
        {  provide: Store, useValue: {}  }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversityDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
