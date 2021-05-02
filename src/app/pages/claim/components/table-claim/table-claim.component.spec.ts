import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClaimComponent } from './table-claim.component';

describe('TableClaimComponent', () => {
  let component: TableClaimComponent;
  let fixture: ComponentFixture<TableClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
