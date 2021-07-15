import {Device} from '../../model/device-model';

export const createQuery = (devices: Device[], countries: string[]) => {
  const queryDevices = devices.length === 0 ? ['ALL'] : devices.map((d) => d.description);
  const queryCountries = countries.length === 0 ? ['ALL'] : countries;
  return queryDevices.map((d) => 'Device = ' + d).join(' OR ')
    + ' AND '
    + queryCountries.map((c) => 'Country = ' + c).join(' OR ');
};

export const toQueryStringDevices = (devices: Device[]): string[] => {
  console.log('UTILS', devices);
  return !!devices || devices.length === 0 ? ['ALL'] : devices.map((d) => d.description);
};

export const toQueryStringCountries = (countries: string[]): string[] => {
  console.log('UTILS', countries);
  return !!countries || countries.length === 0 ? ['ALL'] : countries;
};
