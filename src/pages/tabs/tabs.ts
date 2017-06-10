import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { MyVasesPage } from "../my-vases/my-vases";
import { ProfilesPage } from "../profiles/profiles";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MyVasesPage;
  tab2Root = ProfilesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
