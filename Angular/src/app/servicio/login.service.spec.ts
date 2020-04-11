import { TestBed } from '@angular/core/testing';

import { NodoService } from './login.service';

describe('NodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NodoService = TestBed.get(NodoService);
    expect(service).toBeTruthy();
  });
});
