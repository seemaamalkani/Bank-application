import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditBillComponent } from './credit-bill.component';

describe('CreditBillComponent', () => {
  let component: CreditBillComponent;
  let fixture: ComponentFixture<CreditBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
