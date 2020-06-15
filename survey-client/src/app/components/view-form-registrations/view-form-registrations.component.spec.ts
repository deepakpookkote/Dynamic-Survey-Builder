import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormRegistrationsComponent } from './view-form-registrations.component';

describe('ViewFormRegistrationsComponent', () => {
  let component: ViewFormRegistrationsComponent;
  let fixture: ComponentFixture<ViewFormRegistrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFormRegistrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFormRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
