import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAboutusComponent } from './ad-aboutus.component';

describe('AdAboutusComponent', () => {
  let component: AdAboutusComponent;
  let fixture: ComponentFixture<AdAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAboutusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
