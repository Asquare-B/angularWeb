import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHosAppointmentComponent } from './ad-hos-appointment.component';

describe('AdHosAppointmentComponent', () => {
  let component: AdHosAppointmentComponent;
  let fixture: ComponentFixture<AdHosAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHosAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHosAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
