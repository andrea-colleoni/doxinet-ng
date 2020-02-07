import { GeoPoint } from './geo-point';

export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoPoint;
}
