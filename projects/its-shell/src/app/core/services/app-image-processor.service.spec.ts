import { TestBed } from '@angular/core/testing';

import { AppImageProcessorService } from './app-image-processor.service';

describe('AppImageProcessorService', () => {
  let service: AppImageProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppImageProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
