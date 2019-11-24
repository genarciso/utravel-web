import { TestBed } from '@angular/core/testing';

import { ViagemServiceService } from './viagem-service.service';

describe('ViagemServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViagemServiceService = TestBed.get(ViagemServiceService);
    expect(service).toBeTruthy();
  });
});
