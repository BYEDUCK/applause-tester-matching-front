import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevicesComponent} from './devices/devices.component';
import {HttpClientModule} from '@angular/common/http';
import {CountriesComponent} from './countries/countries.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [DevicesComponent, CountriesComponent],
  exports: [
    DevicesComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ]
})
export class MainModule {
}
