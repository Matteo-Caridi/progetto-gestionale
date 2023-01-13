import { TestBed } from '@angular/core/testing';

import { CrudMethodsService } from './crud-methods.service';

describe('CrudMethodsService', () => {
  let service: CrudMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
