import { TestBed } from '@angular/core/testing';

import { LeaderboardDataService } from './leaderboard-data.service';

describe('LeaderboardDataService', () => {
  let service: LeaderboardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaderboardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
