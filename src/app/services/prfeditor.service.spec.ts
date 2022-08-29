import { TestBed } from '@angular/core/testing';

import { PrfeditorService } from './prfeditor.service';

describe('PrfeditorService', () => {
  let service: PrfeditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrfeditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
