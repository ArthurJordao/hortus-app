import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MyVases } from "../my-vases/my-vases";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MyVases;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
