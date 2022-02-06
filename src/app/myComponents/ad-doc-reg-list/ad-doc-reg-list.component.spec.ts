import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDocRegListComponent } from './ad-doc-reg-list.component';

describe('AdDocRegListComponent', () => {
  let component: AdDocRegListComponent;
  let fixture: ComponentFixture<AdDocRegListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDocRegListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDocRegListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
