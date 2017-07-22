import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvidersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServiceProvidersProvider {
  serviceProvidersList = [{
    id:1,
    name: 'dodo',
    domainName: 'd',
    desc: 'best d&j best d&j best d&j best d&j',
    imageUrl: 'http://howtobecomeadj.net/wp-content/uploads/how-to-become-a-dj.jpg'
  }, {
    id:2,
    name: 'dodo',
    desc: 'best d&j best d&j best d&j best d&j',
    imageUrl: 'http://howtobecomeadj.net/wp-content/uploads/how-to-become-a-dj.jpg'
  }, {
    id:3,
    name: 'dodo',
    desc: 'best d&j best d&j best d&j best d&j',
    imageUrl: 'http://howtobecomeadj.net/wp-content/uploads/how-to-become-a-dj.jpg'
  }, {
    name: 'dodo',
    desc: 'best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j best d&j',
    imageUrl: 'http://howtobecomeadj.net/wp-content/uploads/how-to-become-a-dj.jpg'
  }, {
    id:4,
    name: 'dodo',
    desc: 'best d&j best d&j best d&j best d&j',
    imageUrl: 'http://howtobecomeadj.net/wp-content/uploads/how-to-become-a-dj.jpg'
  }, {
    id:5,
    name: 'dodo',
    desc: 'best d&j best d&j best d&j best d&j',
    imageUrl: 'http://howtobecomeadj.net/wp-content/uploads/how-to-become-a-dj.jpg'
  }]

  constructor() {

    // console.log('Hello ServiceProvidersProvider Provider');
  }

  getServiceProvidersList() {
    return this.serviceProvidersList;
  }
  getServiceProviderById(id:string) {
    return this.serviceProvidersList[id];
  }
}
