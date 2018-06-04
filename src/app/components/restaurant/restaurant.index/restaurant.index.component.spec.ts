import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Restaurant.IndexComponent } from './restaurant.index.component';

describe('Restaurant.IndexComponent', () => {
  let component: Restaurant.IndexComponent;
  let fixture: ComponentFixture<Restaurant.IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Restaurant.IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Restaurant.IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
