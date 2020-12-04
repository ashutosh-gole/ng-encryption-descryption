import { TestBed } from '@angular/core/testing';

import { EncryptionDecryptionService } from './encryption-decryption.service';

describe('EncryptionDecryptionService', () => {
  let service: EncryptionDecryptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncryptionDecryptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
