import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {Device} from '../../model/device-model';
import {first, map} from 'rxjs/operators';
import {createQuery} from './query-utils';
import {HttpService} from '../http.service';
import {RankedTester} from '../../model/ranked-tester-model';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  devices$: BehaviorSubject<Device[]> = new BehaviorSubject<Device[]>([]);
  countries$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  query$: Observable<string>;

  @Input()
  set devices(devices: Device[]) {
    this.devices$.next(devices || []);
  }

  @Input()
  set countries(countries: string[]) {
    this.countries$.next(countries || []);
  }

  @Output() rankedTesters: EventEmitter<RankedTester[]> = new EventEmitter<RankedTester[]>();

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.query$ = combineLatest([this.devices$, this.countries$]).pipe(
      map(([d, c]) => createQuery(d, c))
    );
  }

  submitQuery(): void {
    this.httpService.getMatching(
      this.devices$.getValue().map((d) => d.description),
      this.countries$.getValue()
    ).pipe(first()).subscribe((t) => this.rankedTesters.emit(t));
  }
}
