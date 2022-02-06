import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHosContactComponent } from './ad-hos-contact.component';

describe('AdHosContactComponent', () => {
  let component: AdHosContactComponent;
  let fixture: ComponentFixture<AdHosContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHosContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHosContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
