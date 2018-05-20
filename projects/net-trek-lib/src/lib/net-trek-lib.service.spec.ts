import { TestBed, inject } from '@angular/core/testing';

import { NetTrekLibService } from './net-trek-lib.service';

describe('NetTrekLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetTrekLibService]
    });
  });

  it('should be created', inject([NetTrekLibService], (service: NetTrekLibService) => {
    expect(service).toBeTruthy();
  }));
});
