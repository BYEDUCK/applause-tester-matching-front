import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../http.service';
import {delay, map} from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries$: Observable<CountryView[]>;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.countries$ = this.httpService.getCountries().pipe(
      map((countries) => countries.map((c) => new CountryView(c))),
      delay(500)
    );
  }

  selectCountry(country: CountryView): void {
    country.selected = !country.selected;
  }
}

class CountryView {
  constructor(public cc2: string, public selected = false) {
  }
}
