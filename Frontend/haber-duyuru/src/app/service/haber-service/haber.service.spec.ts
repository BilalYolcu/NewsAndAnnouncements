import { TestBed } from '@angular/core/testing';

import { HaberService } from './haber.service';

describe('HaberService', () => {
  let service: HaberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
