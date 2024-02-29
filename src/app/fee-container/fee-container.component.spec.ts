import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeContainerComponent } from './fee-container.component';

describe('FeeContainerComponent', () => {
  let component: FeeContainerComponent;
  let fixture: ComponentFixture<FeeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeeContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
