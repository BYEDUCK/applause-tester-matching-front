import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Device} from '../../model/device-model';
import {HttpService} from '../http.service';
import {delay, first, map} from 'rxjs/operators';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  devicesView: DeviceView[];
  @Output()
  selectedDevices: EventEmitter<Device[]> = new EventEmitter<Device[]>();

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getDevices().pipe(
      first(),
      map((ds) => ds.map((d) => new DeviceView(d.description, d.id))),
      delay(500) // fake delay
    ).subscribe((dv) => this.devicesView = dv);
  }

  selectDevice(device: DeviceView): void {
    device.selected = !device.selected;
    this.selectedDevices.emit(
      this.devicesView
        .filter((dv) => dv.selected)
        .map((dv) => ({
          id: dv.id,
          description: dv.description
        }))
    );
  }
}

class DeviceView implements Device {
  constructor(public description: string, public id: number, public selected = false) {
  }
}
