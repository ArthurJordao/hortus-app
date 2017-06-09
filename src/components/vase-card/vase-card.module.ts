import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VaseCardComponent } from './vase-card';

@NgModule({
  declarations: [
    VaseCardComponent,
  ],
  imports: [
    IonicPageModule.forChild(VaseCardComponent),
  ],
  exports: [
    VaseCardComponent
  ]
})
export class VaseCardComponentModule {}
