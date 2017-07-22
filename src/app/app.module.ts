import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {ServiceProvidersPage} from '../pages/service-providers/service-providers';
import {TasksPage} from '../pages/tasks/tasks';
import {ProfilePage} from '../pages/profile/profile';
import {ServiceProviderPage} from '../pages/service-providers/service-provider/service-provider';
import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { ServiceProvidersProvider } from '../providers/service-providers/service-providers';
import { DomainProvider } from '../providers/domain/domain';

@NgModule({
  declarations: [
    MyApp,
    ServiceProvidersPage,
    TasksPage,
    ProfilePage,
    LoginPage,
    ServiceProviderPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ServiceProvidersPage,
    TasksPage,
    ProfilePage,
    LoginPage,
    ServiceProviderPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvidersProvider,
    DomainProvider
  ]
})
export class AppModule {
}
