import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Device} from '../model/device-model';
import {RankedTester} from '../model/ranked-tester-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly BACKEND_URL_PREFIX = environment.backendUrl + '/api';

  constructor(private client: HttpClient) {
  }

  public getDevices(): Observable<Device[]> {
    return this.client.get<Device[]>(this.BACKEND_URL_PREFIX + '/data/devices');
  }

  public getCountries(): Observable<string[]> {
    return this.client.get<string[]>(this.BACKEND_URL_PREFIX + '/data/countries');
  }

  public getMatching(searchDevices: string[], searchCountries: string[]): Observable<RankedTester[]> {
    let params = new HttpParams();
    searchCountries.forEach((c) => params = params.append('searchCountry', c));
    searchDevices.forEach((d) => params = params.append('searchDevice', d));
    return this.client.get<RankedTester[]>(this.BACKEND_URL_PREFIX + '/test-matching', {params});
  }
}
