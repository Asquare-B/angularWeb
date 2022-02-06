import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHospitalHomeComponent } from './ad-hospital-home.component';

describe('AdHospitalHomeComponent', () => {
  let component: AdHospitalHomeComponent;
  let fixture: ComponentFixture<AdHospitalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHospitalHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHospitalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
