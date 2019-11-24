import { TestBed } from '@angular/core/testing';

import { VeiculoAlugadoService } from './veiculo-alugado.service';

describe('VeiculoAlugadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeiculoAlugadoService = TestBed.get(VeiculoAlugadoService);
    expect(service).toBeTruthy();
  });
});
