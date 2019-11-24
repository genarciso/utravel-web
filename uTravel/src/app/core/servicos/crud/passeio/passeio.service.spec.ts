import { TestBed } from '@angular/core/testing';

import { PasseioService } from './passeio.service';

describe('PasseioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasseioService = TestBed.get(PasseioService);
    expect(service).toBeTruthy();
  });
});
