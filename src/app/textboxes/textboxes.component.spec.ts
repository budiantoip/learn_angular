import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxesComponent } from './textboxes.component';

describe('TextboxesComponent', () => {
  let component: TextboxesComponent;
  let fixture: ComponentFixture<TextboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextboxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
