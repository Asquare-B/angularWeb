import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUApplicationFormComponent } from './hu-application-form.component';

describe('HUApplicationFormComponent', () => {
  let component: HUApplicationFormComponent;
  let fixture: ComponentFixture<HUApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUApplicationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
