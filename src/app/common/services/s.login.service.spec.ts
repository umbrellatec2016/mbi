import { TestBed, inject } from '@angular/core/testing';

import { S.LoginService } from './s.login.service';

describe('S.LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [S.LoginService]
    });
  });

  it('should be created', inject([S.LoginService], (service: S.LoginService) => {
    expect(service).toBeTruthy();
  }));
});
