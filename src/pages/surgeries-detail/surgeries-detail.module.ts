import {NgModule }from '@angular/core';
import {IonicPageModule }from 'ionic-angular';
import {SurgeriesDetailPage }from './surgeries-detail';
import {TranslateModule }from '@ngx-translate/core';

@NgModule( {
declarations:[
    SurgeriesDetailPage,
],
imports:[
    IonicPageModule.forChild(SurgeriesDetailPage),
TranslateModule.forChild()
],
exports:[
    SurgeriesDetailPage
  ]

})
export class SurgeriesDetailPageModule {}
