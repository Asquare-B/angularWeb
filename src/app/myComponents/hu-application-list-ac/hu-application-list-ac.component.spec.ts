import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuApplicationListAcComponent } from './hu-application-list-ac.component';

describe('HuApplicationListAcComponent', () => {
  let component: HuApplicationListAcComponent;
  let fixture: ComponentFixture<HuApplicationListAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuApplicationListAcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuApplicationListAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
