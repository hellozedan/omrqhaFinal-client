import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServiceProvidersProvider} from "../../providers/service-providers/service-providers";

/**
 * Generated class for the ServiceProvidersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-service-providers',
  templateUrl: 'service-providers.html',
})
export class ServiceProvidersPage {
  serviceProvidersList:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,serviceProvidersProvider:ServiceProvidersProvider) {
    this.serviceProvidersList=serviceProvidersProvider.getServiceProvidersList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceProvidersPage');
  }

}
