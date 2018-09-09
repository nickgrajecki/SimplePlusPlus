import { TestBed, inject } from '@angular/core/testing';

import { CustomiseService } from './customise.service';

describe('CustomiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomiseService]
    });
  });

  it('should be created', inject([CustomiseService], (service: CustomiseService) => {
    expect(service).toBeTruthy();
  }));
});
