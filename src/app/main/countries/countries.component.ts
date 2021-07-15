import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpService} from '../http.service';
import {delay, first, map} from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countriesView: CountryView[];
  @Output()
  selectedCountries: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getCountries().pipe(
      first(),
      map((countries) => countries.map((c) => new CountryView(c))),
      delay(500)
    ).subscribe((cs) => this.countriesView = cs);
  }

  selectCountry(country: CountryView): void {
    country.selected = !country.selected;
    this.selectedCountries.emit(
      this.countriesView
        .filter((cv) => cv.selected)
        .map((cv) => cv.cc2)
    );
  }
}

class CountryView {
  constructor(public cc2: string, public selected = false) {
  }
}
