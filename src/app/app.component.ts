import {Component, OnInit} from '@angular/core';
import {Device} from './model/device-model';
import {RankedTester} from './model/ranked-tester-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-matcher-front';
  selectedDevices: Device[];
  selectedCountries: string[];
  rankedTesters: RankedTester[];

  ngOnInit(): void {
  }

  selectDevices(devices: Device[]): void {
    this.selectedDevices = devices;
  }

  selectCountries(countries: string[]): void {
    this.selectedCountries = countries;
  }

  result(rankedTesters: RankedTester[]): void {
    this.rankedTesters = rankedTesters;
  }
}
