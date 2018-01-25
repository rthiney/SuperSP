import {NgModule }from '@angular/core';
import {IonicPageModule }from 'ionic-angular';
import {SurgeriesListPage }from './surgeries-list';
import {TranslateModule }from '@ngx-translate/core';

@NgModule( {
declarations:[
    SurgeriesListPage,
],
imports:[
    IonicPageModule.forChild(SurgeriesListPage),
TranslateModule.forChild()
],
exports:[
    SurgeriesListPage
  ]
})
export class SurgeriesListPageModule {}
