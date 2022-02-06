import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuApplicationListRjComponent } from './hu-application-list-rj.component';

describe('HuApplicationListRjComponent', () => {
  let component: HuApplicationListRjComponent;
  let fixture: ComponentFixture<HuApplicationListRjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuApplicationListRjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuApplicationListRjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
