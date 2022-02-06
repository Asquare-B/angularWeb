import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDocProfileComponent } from './ad-doc-profile.component';

describe('AdDocProfileComponent', () => {
  let component: AdDocProfileComponent;
  let fixture: ComponentFixture<AdDocProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDocProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDocProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
