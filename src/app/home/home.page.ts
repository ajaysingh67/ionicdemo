import { Component } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { ViewController } from '@ionic/core';
import { UserDataPage } from '../user-data/user-data.page';
import { ListPage } from '../list/list.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  value = 0 ;
  constructor(private popoverController: PopoverController) {}

  
  close() {
     this.popoverController.dismiss();
  }
 async openpopup(ev:Event){

    const popover = await this.popoverController.create({
      component: UserDataPage,
      event: ev,
    //  translucent: true,
     cssClass: 'custom-popover',
      componentProps:{
        custom_id : this.value 
      }
    });
     popover.present();

  }

}
