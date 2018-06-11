import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantResultsComponent } from './restaurant-results.component';

describe('RestaurantResultsComponent', () => {
  let component: RestaurantResultsComponent;
  let fixture: ComponentFixture<RestaurantResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
