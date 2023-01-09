import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBookingFormComponent } from './dialog-booking-form.component';

describe('DialogBookingFormComponent', () => {
  let component: DialogBookingFormComponent;
  let fixture: ComponentFixture<DialogBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBookingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
