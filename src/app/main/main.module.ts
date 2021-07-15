import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevicesComponent} from './devices/devices.component';
import {HttpClientModule} from '@angular/common/http';
import {CountriesComponent} from './countries/countries.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {QueryComponent} from './query/query.component';
import {MatButtonModule} from '@angular/material/button';
import {ResultsComponent} from './results/results.component';


@NgModule({
  declarations: [DevicesComponent, CountriesComponent, QueryComponent, ResultsComponent],
  exports: [
    DevicesComponent,
    CountriesComponent,
    QueryComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ]
})
export class MainModule {
}
