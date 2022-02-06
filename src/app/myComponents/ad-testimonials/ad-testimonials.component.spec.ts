import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTestimonialsComponent } from './ad-testimonials.component';

describe('AdTestimonialsComponent', () => {
  let component: AdTestimonialsComponent;
  let fixture: ComponentFixture<AdTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
