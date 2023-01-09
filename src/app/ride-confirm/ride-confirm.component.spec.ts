import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideConfirmComponent } from './ride-confirm.component';

describe('RideConfirmComponent', () => {
  let component: RideConfirmComponent;
  let fixture: ComponentFixture<RideConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RideConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
