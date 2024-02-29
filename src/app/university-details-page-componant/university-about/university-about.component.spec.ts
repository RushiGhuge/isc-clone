import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityAboutComponent } from './university-about.component';

describe('UniversityAboutComponent', () => {
  let component: UniversityAboutComponent;
  let fixture: ComponentFixture<UniversityAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversityAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversityAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
