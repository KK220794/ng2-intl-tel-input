import { TestBed } from '@angular/core/testing';

import { Ng2IntlTelInputService } from './ng2-intl-tel-input.service';

describe('Ng2IntlTelInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng2IntlTelInputService = TestBed.get(Ng2IntlTelInputService);
    expect(service).toBeTruthy();
  });
});
