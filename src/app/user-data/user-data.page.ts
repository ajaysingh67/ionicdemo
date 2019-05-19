import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {

  constructor(private popoverController: PopoverController,private navparms:NavParams) { }

  ngOnInit() {
  }

  close() {
    this.popoverController.dismiss();
    }

}
