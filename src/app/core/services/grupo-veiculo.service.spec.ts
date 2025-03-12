import { TestBed } from '@angular/core/testing';

import { GrupoVeiculoService } from './grupo-veiculo.service';

describe('GrupoVeiculoService', () => {
  let service: GrupoVeiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoVeiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
