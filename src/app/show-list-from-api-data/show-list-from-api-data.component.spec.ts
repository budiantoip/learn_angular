import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListFromApiDataComponent } from './show-list-from-api-data.component';

describe('ShowListFromApiDataComponent', () => {
  let component: ShowListFromApiDataComponent;
  let fixture: ComponentFixture<ShowListFromApiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListFromApiDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListFromApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
