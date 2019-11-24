import { TestBed } from '@angular/core/testing';

import { VeiculoAlugadoServiceService } from './veiculo-alugado-service.service';

describe('VeiculoAlugadoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeiculoAlugadoServiceService = TestBed.get(VeiculoAlugadoServiceService);
    expect(service).toBeTruthy();
  });
});
