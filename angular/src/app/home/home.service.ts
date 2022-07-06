import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private http: HttpClient,
    private transerState: TransferStateService
  ) {
    console.log('HomeService constructor');
  }

  getCities() {
    return this.transerState.useScullyTransferState(
      'cities',
      this.http.get('http://localhost:3001/api/cities')
    );
  }
}
