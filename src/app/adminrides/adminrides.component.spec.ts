import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminridesComponent } from './adminrides.component';

describe('AdminridesComponent', () => {
  let component: AdminridesComponent;
  let fixture: ComponentFixture<AdminridesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminridesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
