import moment from 'moment';

export class BeaconModel {

  uuid: string;
  major: number;
  minor: number;
  rssi: number;
  tx: number;
  accuracy: number;
  proximity: string;
  distance: any;
  arrivalTime: any;

  constructor(public beacon: any) {

    this.uuid = beacon.uuid;
    this.major = beacon.major;
    this.minor = beacon.minor;
    this.rssi = beacon.rssi;
    this.tx = beacon.tx;
    this.accuracy = beacon.accuracy;
    this.proximity = beacon.proximity;
    this.distance = this.getDistance(beacon)
    this.arrivalTime = moment();

  }

  private getDistance(beacon) {
    // console.log('Math pow below');
    // console.log(Math.pow((beacon.rssi/-59),7.7095));
    // console.log("rssi and tx", beacon.rssi, beacon.tx);
    // console.log("distance from beacon Modal below");
    // console.log((0.89976) *  Math.pow((beacon.rssi/-59),7.7095) + 0.111);
    return ((0.89976) *  Math.pow((beacon.rssi/-59),7.7095) + 0.111);
  }
}