import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestFormsComponent } from './guest-forms.component';

describe('GuestFormsComponent', () => {
  let component: GuestFormsComponent;
  let fixture: ComponentFixture<GuestFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
