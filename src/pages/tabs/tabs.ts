import { Component } from '@angular/core';

import {ServiceProvidersPage} from '../service-providers/service-providers';
import {TasksPage} from '../tasks/tasks';
import {ProfilePage} from '../profile/profile';
import { HomePage } from '../home/home';
import { ServiceProvidersProvider } from '../../providers/service-providers/service-providers';

@Component({
  templateUrl: 'tabs.html',
  providers:[ServiceProvidersProvider]
})
export class TabsPage {

  homePage = HomePage;
  serviceProvidersPage = ServiceProvidersPage;
  tasksPage = TasksPage;
  profilePage = ProfilePage;

  constructor() {

  }
}
