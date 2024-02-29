import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortingDataComponent } from './sorting-data.component';


describe('SortingDataComponent', () => {
  let component: SortingDataComponent;
  let fixture: ComponentFixture<SortingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortingDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
