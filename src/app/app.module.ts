import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilesPage } from '../pages/profiles/profiles';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VaseProvider } from '../providers/vase/vase';
import { VaseCardComponent } from '../components/vase-card/vase-card';
import { MyVasesPage } from "../pages/my-vases/my-vases";

@NgModule({
  declarations: [
    MyApp,
    ProfilesPage,
    ContactPage,
    MyVasesPage,
    TabsPage,
    VaseCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilesPage,
    ContactPage,
    MyVasesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VaseProvider
  ]
})
export class AppModule {}
