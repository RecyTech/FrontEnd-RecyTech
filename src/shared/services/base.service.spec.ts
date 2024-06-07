import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';
import {Product} from "../../app/product/model/product.entity";

describe('BaseService', () => {
  let service: BaseService<Product>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
