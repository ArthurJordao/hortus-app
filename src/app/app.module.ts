import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilesPage } from '../pages/profiles/profiles';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VaseCardComponent } from '../components/vase-card/vase-card';
import { MyVasesPage } from "../pages/my-vases/my-vases";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database"
import { ProfileDetailsPage } from "../pages/profile-details/profile-details";
import { RegisterPage } from "../pages/register/register";
import { LoginPage } from "../pages/login/login";
import { AngularFireAuthModule } from "angularfire2/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyDhPG9j5ZCgqv0b9rjkUUoEJEP3HFicXOI",
    authDomain: "hortus-8a27a.firebaseapp.com",
    databaseURL: "https://hortus-8a27a.firebaseio.com",
    projectId: "hortus-8a27a",
    storageBucket: "hortus-8a27a.appspot.com",
    messagingSenderId: "162411921846"
  };

@NgModule({
  declarations: [
    MyApp,
    ProfilesPage,
    ContactPage,
    MyVasesPage,
    TabsPage,
    VaseCardComponent,
    ProfileDetailsPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilesPage,
    ContactPage,
    MyVasesPage,
    TabsPage,
    ProfileDetailsPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
