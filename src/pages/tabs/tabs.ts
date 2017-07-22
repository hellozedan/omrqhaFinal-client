import { Component } from '@angular/core';

import {ServiceProvidersPage} from '../service-providers/service-providers';
import {TasksPage} from '../tasks/tasks';
import {ProfilePage} from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage = HomePage;
  serviceProvidersPage = ServiceProvidersPage;
  tasksPage = TasksPage;
  profilePage = ProfilePage;

  constructor() {

  }
}
