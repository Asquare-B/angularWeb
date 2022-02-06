import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHosRegListComponent } from './ad-hos-reg-list.component';

describe('AdHosRegListComponent', () => {
  let component: AdHosRegListComponent;
  let fixture: ComponentFixture<AdHosRegListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHosRegListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHosRegListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
