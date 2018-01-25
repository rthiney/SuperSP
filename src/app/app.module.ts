import {HttpClient, HttpClientModule }from '@angular/common/http';
import {ErrorHandler, NgModule, Injector, Injectable }from '@angular/core';
import {BrowserModule }from '@angular/platform-browser';
import {Camera }from '@ionic-native/camera';
import {SplashScreen }from '@ionic-native/splash-screen';
import {StatusBar }from '@ionic-native/status-bar';
import {IonicStorageModule, Storage }from '@ionic/storage';
import {TranslateLoader, TranslateModule }from '@ngx-translate/core';
import {TranslateHttpLoader }from '@ngx-translate/http-loader';
import {IonicApp, IonicErrorHandler, IonicModule }from 'ionic-angular';
import {Pro }from '@ionic/pro';
import {Items }from '../mocks/providers/items';
import {Settings }from '../providers/providers';
import {User }from '../providers/providers';
import {Api }from '../providers/providers';
import {MyApp }from './app.component';
import {SurgerviewProvider }from '../providers/surgerview/surgerview'; 
const IonicPro = Pro.init('0536e026',  {
appVersion:"0.0.1"
});
@Injectable()
export class MyErrorHandler implements ErrorHandler {
ionicErrorHandler:IonicErrorHandler;

constructor(injector:Injector) {
try {
this.ionicErrorHandler = injector.get(IonicErrorHandler);
}catch (e) {
// Unable to get the IonicErrorHandler provider, ensure
// IonicErrorHandler has been added to the providers list below
}
}

handleError(err:any):void {
IonicPro.monitoring.handleNewError(err);
// Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http:HttpClient) {
return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage:Storage) {
/**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
return new Settings(storage,  {
option1:true,
option2:'Ionitron J. Framework',
option3:'3',
option4:'Hello'
});
}

@NgModule( {
declarations:[
    MyApp
  ],
imports:[
    BrowserModule,
HttpClientModule,
TranslateModule.forRoot( {
loader: {
provide:TranslateLoader,
useFactory:(createTranslateLoader),
deps:[HttpClient]
      }
}),
IonicModule.forRoot(MyApp),
IonicStorageModule.forRoot()
],
bootstrap:[IonicApp],
entryComponents:[
    MyApp
  ],
providers:[
    Api,
Items,
User,
Camera,
SplashScreen,
StatusBar,  {provide:Settings, useFactory:provideSettings, deps:[Storage] },
IonicErrorHandler,
// Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: MyErrorHandler },
    SurgerviewProvider
  ]
})
export class AppModule { }
