import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdContactComponent } from './ad-contact.component';

describe('AdContactComponent', () => {
  let component: AdContactComponent;
  let fixture: ComponentFixture<AdContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
