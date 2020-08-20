import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenratebillComponent } from './genratebill.component';

describe('GenratebillComponent', () => {
  let component: GenratebillComponent;
  let fixture: ComponentFixture<GenratebillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenratebillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenratebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
