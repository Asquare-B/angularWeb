import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHosDetailsComponent } from './ad-hos-details.component';

describe('AdHosDetailsComponent', () => {
  let component: AdHosDetailsComponent;
  let fixture: ComponentFixture<AdHosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
