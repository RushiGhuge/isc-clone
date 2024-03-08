import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPollComponent } from './quick-poll.component';

describe('QuickPollComponent', () => {
  let component: QuickPollComponent;
  let fixture: ComponentFixture<QuickPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickPollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
