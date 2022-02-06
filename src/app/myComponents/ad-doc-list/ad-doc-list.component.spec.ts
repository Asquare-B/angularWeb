import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDocListComponent } from './ad-doc-list.component';

describe('AdDocListComponent', () => {
  let component: AdDocListComponent;
  let fixture: ComponentFixture<AdDocListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDocListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
