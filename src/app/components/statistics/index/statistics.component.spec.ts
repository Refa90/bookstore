import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsIndexComponent } from './statistics.component';

describe('StatisticsComponent', () => {
  let component: StatisticsIndexComponent;
  let fixture: ComponentFixture<StatisticsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
