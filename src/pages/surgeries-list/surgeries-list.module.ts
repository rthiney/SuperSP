import {NgModule }from '@angular/core';
import {IonicPageModule }from 'ionic-angular';
import {SurgeriesListPage }from './surgeries-list';
import {TranslateModule }from '@ngx-translate/core';
import {SurgeriesDetailPageModule }from '../surgeries-detail/surgeries-detail.module';

@NgModule( {
declarations:[
    SurgeriesListPage
],
imports:[
SurgeriesDetailPageModule,
IonicPageModule.forChild(SurgeriesListPage),
TranslateModule.forChild()
],
exports:[
    SurgeriesListPage
  ]
})
export class SurgeriesListPageModule {}
