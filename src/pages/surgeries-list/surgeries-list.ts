import {Component }from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController }from 'ionic-angular';
import {SurgerviewProvider }from '../../providers/surgerview/surgerview';
import {SurgeriesView }from '../../models/surgeriesview';

/**
 * Generated class for the SurgeriesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on * Ionic pages and navigation. */

@IonicPage()
@Component( {
selector:'page-surgeries-list',
templateUrl:'surgeries-list.html',
})
export class SurgeriesListPage {
surgeries:SurgeriesView[] = [];
errorMessage:string;
constructor(public navCtrl:NavController, public navParams:NavParams, public modalCtrl:ModalController, public surgeriewSvc:SurgerviewProvider) {
}

ionViewDidLoad() {
this.getSurgeries();

}

getSurgeries() {
this.surgeriewSvc.getSurgeries()
.subscribe(
countries =>  {
this.surgeries = countries
},
error => this.errorMessage =  < any > error)
}

addItem() {
let addModal = this.modalCtrl.create('SurgeryDetailsPage');
addModal.onDidDismiss(item =>  {
if (item) {
this.surgeries.push(item);
}
})
addModal.present();
}

/**
   * Delete an item from the list of items.
   */
deleteItem(item:SurgeriesView) {
let i = this.surgeries.findIndex(o => o.surgeryId == item.surgeryId)
this.surgeries.slice(i);
}

/**
   * Navigate to the detail page for this item.
   */
openItem(item:SurgeriesView) {
this.navCtrl.push('SurgeryDetailsPage',  {
item:item
    });
}
}
