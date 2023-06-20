/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProdutosServicesService } from './produtos-services.service';

describe('Service: ProdutosServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutosServicesService]
    });
  });

  it('should ...', inject([ProdutosServicesService], (service: ProdutosServicesService) => {
    expect(service).toBeTruthy();
  }));
});
