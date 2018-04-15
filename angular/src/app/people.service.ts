import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

const API = 'http://ui-grid.info/data/500_complex.json';

@Injectable()
export class PeopleService {

  constructor(private http: Http, private messageService: MessageService) { }

  people = [];

  getAll(){
    return this.http.get(API)
      .map(res => {
        this.messageService.show("Request has been done");
        this.people = res.json();
        return this.people;
      })
      .pipe(catchError(this.handleError('GetAll', [])));
  }

  deleteOne(person:any){
    for(let i=0; i<this.people.length; i++){
      if(this.people[i].id === person.id){
        this.people.splice(i, 1);
      }
    }
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      this.messageService.show("Request is failed!", true)
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  
}
 