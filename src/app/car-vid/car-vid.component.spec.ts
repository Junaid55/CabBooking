import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarVidComponent } from './car-vid.component';

describe('CarVidComponent', () => {
  let component: CarVidComponent;
  let fixture: ComponentFixture<CarVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarVidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
