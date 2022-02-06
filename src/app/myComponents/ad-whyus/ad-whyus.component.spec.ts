import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdWhyusComponent } from './ad-whyus.component';

describe('AdWhyusComponent', () => {
  let component: AdWhyusComponent;
  let fixture: ComponentFixture<AdWhyusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdWhyusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdWhyusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
