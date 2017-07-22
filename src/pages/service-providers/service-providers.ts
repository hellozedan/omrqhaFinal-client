import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServiceProvidersProvider} from "../../providers/service-providers/service-providers";
import {ServiceProvider} from "../../models/service-provider/service-provider"
import {DomainProvider} from "../../providers/domain/domain";
import {ServiceProviderPage} from '../service-providers/service-provider/service-provider';

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
  serviceProvidersList :ServiceProvider[];
  filteredServiceProvidersList: ServiceProvider[];

  domainList: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,serviceProvidersProvider:ServiceProvidersProvider, domainProvider: DomainProvider) {
    this.serviceProvidersList=serviceProvidersProvider.getServiceProvidersList();
    this.domainList = domainProvider.getDomainList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceProvidersPage');
  }

  filterByDomain(domain:string){
    this.filteredServiceProvidersList = this.serviceProvidersList.filter(
      serviceProvider => serviceProvider.domainName === domain);
  }
  goToServiceProvider(id:string){
    this.navCtrl.push(ServiceProviderPage)
  }

}
