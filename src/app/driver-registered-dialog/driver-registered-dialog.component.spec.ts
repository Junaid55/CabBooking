import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRegisteredDialogComponent } from './driver-registered-dialog.component';

describe('DriverRegisteredDialogComponent', () => {
  let component: DriverRegisteredDialogComponent;
  let fixture: ComponentFixture<DriverRegisteredDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverRegisteredDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverRegisteredDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
