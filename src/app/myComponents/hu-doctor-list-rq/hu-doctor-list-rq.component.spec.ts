import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuDoctorListRqComponent } from './hu-doctor-list-rq.component';

describe('HuDoctorListRqComponent', () => {
  let component: HuDoctorListRqComponent;
  let fixture: ComponentFixture<HuDoctorListRqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuDoctorListRqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuDoctorListRqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
