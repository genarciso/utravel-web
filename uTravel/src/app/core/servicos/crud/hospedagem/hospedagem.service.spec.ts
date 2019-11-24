import { TestBed } from '@angular/core/testing';

import { HospedagemService } from './hospedagem.service';

describe('HospedagemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HospedagemService = TestBed.get(HospedagemService);
    expect(service).toBeTruthy();
  });
});
