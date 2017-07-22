import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServiceProvidersProvider} from '../../../providers/service-providers/service-providers'
/**
 * Generated class for the ServiceProviderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-service-provider',
  templateUrl: 'service-provider.html',
})
export class ServiceProviderPage {
  private providerId:string;
  private serviceProvider:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,serviceProvidersProvider:ServiceProvidersProvider) {
    this.providerId='3';
    this.serviceProvider=serviceProvidersProvider.getServiceProviderById(this.providerId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceProviderPage');
  }

}
