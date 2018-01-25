import {Component, EventEmitter, Input, Output }from '@angular/core';
import {IonicPage, NavController, NavParams }from 'ionic-angular';
import {SurgeriesView }from '../../models/surgeriesview';
/**
 * Generated class for the SurgeriesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on * Ionic pages and navigation. */

@IonicPage()
@Component( {
selector:'page-surgeries-detail',
templateUrl:'surgeries-detail.html',
})
export class SurgeriesDetailPage {
duration:number;
@Input()s:SurgeriesView;
@Input()idx:number;
@Output()close = new EventEmitter();
error:any;
@Input()avatarText:string;
constructor(public navCtrl:NavController, public navParams:NavParams) {
}

ionViewDidLoad() {
console.log('ionViewDidLoad SurgeriesDetailPage');
this.duration = parseInt(this.s.surgeryTime);
if (this.s.surgeryTime.indexOf("m") < 0)
this.duration = this.duration * 60;
}

}
