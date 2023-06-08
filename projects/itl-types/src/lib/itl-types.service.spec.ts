import { TestBed } from '@angular/core/testing';

import { ItlTypesService } from './itl-types.service';

describe('ItlTypesService', () => {
  let service: ItlTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItlTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
