import {Device} from '../../model/device-model';

export const createQuery = (devices: Device[], countries: string[]) => {
  const queryDevices = devices.length === 0 ? ['ALL'] : devices.map((d) => d.description);
  const queryCountries = countries.length === 0 ? ['ALL'] : countries;
  return queryDevices.map((d) => 'Device = ' + d).join(' OR ')
    + ' AND '
    + queryCountries.map((c) => 'Country = ' + c).join(' OR ');
};
