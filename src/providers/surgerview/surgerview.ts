import {Injectable }from '@angular/core';
import {HttpClient }from '@angular/common/http';
import {Observable }from 'rxjs/Observable';
import {map, catchError}from 'rxjs/operators';
  import {CONFIGURATION }from '../constants';
import 'rxjs/add/operator/map';
import {ISurgeriesView, SurgeriesView }from '../../models/surgeriesview';

/*
  Generated class for the SurgerviewProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI. */
@Injectable()
export class SurgerviewProvider {
data:SurgeriesView[];
private apiUrl:string;
constructor(public http:HttpClient ) {

  this.apiUrl = CONFIGURATION.baseUrls.apiPhp + 'surgeriesview?transform=1&?filter[]=doctorFosId,eq,12&filter[]=completed,eq,1&order=term,desc&satisfy=all&page=1';
console.log('Hello SurgerviewProvider Provider:' + this.apiUrl);
}

//   getSugeries() {
//     if (this.data) {
//       return Observable.resolve(this.data);
//     }

//     return new Promise(resolve => {
//       this.http.get(this.apiUrl + '/users')
//         .map(res => res.json())
//         .subscribe(data => {
//           this.data = data;
//           resolve(this.data);
//         });
//     });
// }

getSurgeries():Observable < SurgeriesView[] >  {
if (this.data)
return Observable.of(this.data);

return this.http.get(this.apiUrl).pipe(
map(this.extractData),
catchError(this.handleError));
}

private extractData(res:any) {
this.data = res.surgeriesview ||  {}
return this.data;
}

private handleError(error:Response | any) {
let errMsg:string;
if (error instanceof Response) {
const err = error || '';
errMsg = `$ {error.status} - $ {error.statusText || ''}$ {err}`;
}else {
errMsg = error.message?error.message:error.toString();
}
console.error(errMsg);
return Observable.throw(errMsg);
}
}
