import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VaseDetailsPage } from './vase-details';

@NgModule({
  declarations: [
    VaseDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(VaseDetailsPage),
  ],
  exports: [
    VaseDetailsPage
  ]
})
export class VaseDetailsPageModule {}
