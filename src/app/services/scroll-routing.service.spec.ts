import { TestBed } from '@angular/core/testing';

import { ScrollRoutingService } from './scroll-routing.service';

describe('ScrollRoutingService', () => {
  let service: ScrollRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
