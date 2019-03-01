import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2IntlTelInputComponent } from './ng2-intl-tel-input.component';

describe('Ng2IntlTelInputComponent', () => {
  let component: Ng2IntlTelInputComponent;
  let fixture: ComponentFixture<Ng2IntlTelInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2IntlTelInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2IntlTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
