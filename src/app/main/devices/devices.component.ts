import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Device} from '../../model/device-model';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  devices$: Observable<Device[]>;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.devices$ = this.httpService.getDevices();
  }

}
