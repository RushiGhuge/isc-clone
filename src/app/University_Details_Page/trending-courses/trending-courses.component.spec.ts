import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCoursesComponent } from './trending-courses.component';

describe('TrendingCoursesComponent', () => {
  let component: TrendingCoursesComponent;
  let fixture: ComponentFixture<TrendingCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
