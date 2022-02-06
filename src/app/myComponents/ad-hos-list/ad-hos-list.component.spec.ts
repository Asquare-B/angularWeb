import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHosListComponent } from './ad-hos-list.component';

describe('AdHosListComponent', () => {
  let component: AdHosListComponent;
  let fixture: ComponentFixture<AdHosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
