import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDiseasesListComponent } from './ad-diseases-list.component';

describe('AdDiseasesListComponent', () => {
  let component: AdDiseasesListComponent;
  let fixture: ComponentFixture<AdDiseasesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDiseasesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDiseasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
