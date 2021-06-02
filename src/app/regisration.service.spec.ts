import { TestBed } from '@angular/core/testing';

import { RegisrationService } from './regisration.service';

describe('RegisrationService', () => {
  let service: RegisrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
