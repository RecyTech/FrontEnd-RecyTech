import { TestBed } from '@angular/core/testing';

import { VentasAPIService } from './ventas-api.service';

describe('VentasAPIService', () => {
  let service: VentasAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentasAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
