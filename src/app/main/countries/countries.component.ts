import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries$: Observable<string[]>;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.countries$ = this.httpService.getCountries();
  }

}
