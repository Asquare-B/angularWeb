import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFaqComponent } from './ad-faq.component';

describe('AdFaqComponent', () => {
  let component: AdFaqComponent;
  let fixture: ComponentFixture<AdFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
