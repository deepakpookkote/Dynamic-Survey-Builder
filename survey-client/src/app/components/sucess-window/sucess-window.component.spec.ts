import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessWindowComponent } from './sucess-window.component';

describe('SucessWindowComponent', () => {
  let component: SucessWindowComponent;
  let fixture: ComponentFixture<SucessWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
