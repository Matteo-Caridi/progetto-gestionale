import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CrudMethodsService } from './crud-methods.service';

describe('CrudMethodsService', () => {
  let service: CrudMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CrudMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
