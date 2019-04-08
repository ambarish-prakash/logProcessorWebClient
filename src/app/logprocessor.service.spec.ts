import { TestBed } from '@angular/core/testing';

import { LogprocessorService } from './logprocessor.service';

describe('LogprocessorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogprocessorService = TestBed.get(LogprocessorService);
    expect(service).toBeTruthy();
  });
});
