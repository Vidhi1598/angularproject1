import { TestBed } from '@angular/core/testing';

import { CallajaxService } from './callajax.service';

describe('CallajaxService', () => {
  let service: CallajaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallajaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
