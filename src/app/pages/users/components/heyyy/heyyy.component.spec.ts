import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeyyyComponent } from './heyyy.component';

describe('HeyyyComponent', () => {
  let component: HeyyyComponent;
  let fixture: ComponentFixture<HeyyyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeyyyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeyyyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
