import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverpanelComponent } from './driverpanel.component';

describe('DriverpanelComponent', () => {
  let component: DriverpanelComponent;
  let fixture: ComponentFixture<DriverpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
