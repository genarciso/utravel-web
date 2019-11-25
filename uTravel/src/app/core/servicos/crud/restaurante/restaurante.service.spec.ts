import { TestBed } from '@angular/core/testing';

import { RestauranteServiceService } from './restaurante-service.service';

describe('RestauranteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestauranteServiceService = TestBed.get(RestauranteServiceService);
    expect(service).toBeTruthy();
  });
});
