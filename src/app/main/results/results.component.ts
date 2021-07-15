import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {RankedTester} from '../../model/ranked-tester-model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  rankedTesters$: BehaviorSubject<RankedTester[]> = new BehaviorSubject<RankedTester[]>(null);

  @Input()
  set results(rankedTesters: RankedTester[]) {
    this.rankedTesters$.next(rankedTesters);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
