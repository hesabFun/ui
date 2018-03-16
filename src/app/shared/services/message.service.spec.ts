import { inject, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';

import { MessageService } from './message.service';

describe('Service: /shared/services/message.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
      ],
      providers: [
        MessageService,
      ],
    });
  });

  it('should create the service', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});
