import {Component, EventEmitter, Input, Output }from '@angular/core';
import {IonicPage, NavController, NavParams }from 'ionic-angular';
import {SurgeriesView }from '../../models/surgeriesview';
import {LetterAvatarDirective }from '../../directives/letter-avatar-directive';
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

@Input()surgery:SurgeriesView;
@Input()idx:number;
@Output()close = new EventEmitter();
error:any;
@Input()avatarText:string;

avatar:any =  {
size:50, // default size is 100
fontColor:'#FFFFFF',
border:"2px solid #d3d3d3",
isSquare:false, // if it is true then letter avatar will be in square defaule value is false
text:'', //
fixedColor:false //if you enable true then letter will have same color for ever default value is false
};

public avatarDataSquare:any =  {
size:100,
//        background: '#F39C12', // by default it will produce dynamic colors
fontColor:'#FFFFFF',
border:"2px solid #d3d3d3",
isSquare:true,
text:"Rajan Gunasekaran"
};
public avatarDataCircle1:any =  {
size:100,
//        background: '#F39C12', // by default it will produce dynamic colors
fontColor:'#FFFFFF',
border:"2px solid #d3d3d3",
isSquare:false,
text:"Rajan Gunasekaran"
};
public avatarDataCircle2:any =  {
size:100, // default size is 100
//        background: '#F39C12', // by default it will produce dynamic colors
fontColor:'#FFFFFF',
border:"2px solid #d3d3d3",
isSquare:false, // if it is true then letter avatar will be in square defaule value is false
text:"Siva", //
fixedColor:true //if you enable true then letter will have same color for ever default value is false
  };
constructor(public navCtrl:NavController, public navParams:NavParams) {
}

ionViewDidLoad() {
console.log('ionViewDidLoad SurgeriesDetailPage');
this.duration = parseInt(this.surgery.surgeryTime);
if (this.surgery.surgeryTime.indexOf("m") < 0)
this.duration = this.duration * 60;
}

}
