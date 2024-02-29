import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSchoolsComponent } from './explore-schools.component';

describe('ExploreSchoolsComponent', () => {
  let component: ExploreSchoolsComponent;
  let fixture: ComponentFixture<ExploreSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreSchoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create error', () => {
    expect(component).toBeTruthy();
  });
});
