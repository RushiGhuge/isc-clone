import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarUniversityComponent } from './similar-university.component';

describe('SimilarUniversityComponent', () => {
  let component: SimilarUniversityComponent;
  let fixture: ComponentFixture<SimilarUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimilarUniversityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimilarUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
