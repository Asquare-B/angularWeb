import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDoctorHomeComponent } from './ad-doctor-home.component';

describe('AdDoctorHomeComponent', () => {
  let component: AdDoctorHomeComponent;
  let fixture: ComponentFixture<AdDoctorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDoctorHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDoctorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
