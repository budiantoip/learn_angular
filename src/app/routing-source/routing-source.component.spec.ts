import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingSourceComponent } from './routing-source.component';

describe('RoutingSourceComponent', () => {
  let component: RoutingSourceComponent;
  let fixture: ComponentFixture<RoutingSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
