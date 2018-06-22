import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMapResultsComponent } from './restaurant-map-results.component';

describe('RestaurantMapResultsComponent', () => {
  let component: RestaurantMapResultsComponent;
  let fixture: ComponentFixture<RestaurantMapResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMapResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMapResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
