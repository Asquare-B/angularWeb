import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDocActivityComponent } from './ad-doc-activity.component';

describe('AdDocActivityComponent', () => {
  let component: AdDocActivityComponent;
  let fixture: ComponentFixture<AdDocActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDocActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDocActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
