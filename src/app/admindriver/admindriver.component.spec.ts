import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindriverComponent } from './admindriver.component';

describe('AdmindriverComponent', () => {
  let component: AdmindriverComponent;
  let fixture: ComponentFixture<AdmindriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
