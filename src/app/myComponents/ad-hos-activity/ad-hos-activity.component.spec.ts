import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHosActivityComponent } from './ad-hos-activity.component';

describe('AdHosActivityComponent', () => {
  let component: AdHosActivityComponent;
  let fixture: ComponentFixture<AdHosActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHosActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHosActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
