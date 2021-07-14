import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Device} from '../../model/device-model';
import {HttpService} from '../http.service';
import {delay, map} from 'rxjs/operators';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevicesComponent implements OnInit {

  devices$: Observable<DeviceView[]>;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.devices$ = this.httpService.getDevices().pipe(
      map((ds) => ds.map((d) => new DeviceView(d.description, d.id))),
      delay(500) // fake delay
    );
  }

  selectDevice(device: DeviceView): void {
    device.selected = !device.selected;
  }
}

class DeviceView implements Device {
  constructor(public description: string, public id: number, public selected = false) {
  }
}
