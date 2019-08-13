import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//after values
import { Subject } from 'rxjs/Subject';
//last one + after values
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//all the values
import { ReplaySubject } from 'rxjs/ReplaySubject'

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';
  //observable$;
  mySubject$;
  searchSubject$ = new Subject<string>();
  ngOnInit(){
    /*
    //Observable

    this.observable$ = Observable.create((observer) =>{
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });
    this.observable$.subscribe(
      value => console.log(value),
      err => {},
      () => console.log('this is the end')
    );
            //Subject


    this.mySubject$ = new Subject();
    this.mySubject$.subscribe(x => console.log('first subscribe', x));
    this.mySubject$.next(1);
    this.mySubject$.next(2);
    //this.mySubject$.complete();
    //this.mySubject$.unsubscribe();
    this.mySubject$.subscribe(x => console.log('second subscribe', x));
    this.mySubject$.next(3);
    
        //BehaviorSubject

    this.mySubject$ = new BehaviorSubject(200);
    this.mySubject$.subscribe(x => console.log('first subscribe', x));
    this.mySubject$.next(1);
    this.mySubject$.next(2);
    //this.mySubject$.complete();
    //this.mySubject$.unsubscribe();
    this.mySubject$.subscribe(x => console.log('second subscribe', x));
    this.mySubject$.next(3);
      
    //ReplaySubject

    this.mySubject$ = new ReplaySubject();
    this.mySubject$.subscribe(x => console.log('first subscribe', x));
    this.mySubject$.next(1);
    this.mySubject$.next(2);
    //this.mySubject$.complete();
    //this.mySubject$.unsubscribe();
    this.mySubject$.subscribe(x => console.log('second subscribe', x));
    this.mySubject$.next(3);

      //take
    const numbers$ = Observable.interval(1000).take(5);
     numbers$.subscribe(x => console.log(x));
           
    //map
          const numbers$ = Observable.interval(1000);
          numbers$
          .take(5)
          .map(x => x * 10)
          .subscribe(x => console.log(x));    

          //Filter
  const numbers$ = Observable.interval(1000);
          numbers$
          .take(5)
          .map(x => x * 10)
          .filter(x => x > 20)
          .subscribe(x => console.log(x));   
          

          //Merge Map
         const numbers$ = Observable.interval(1000);
         const letters$ = Observable.of('a', 'b', 'c', 'd', 'e');
         letters$.mergeMap(x => 
          numbers$
          .take(5)
          .map(i => i+x)
          ).subscribe(x => console.log(x));
          

          //switch Map

          const numbers$ = Observable.interval(1000);
         const letters$ = Observable.of('a', 'b', 'c', 'd', 'e');
         letters$.switchMap(x => 
          numbers$
          .take(5)
          .map(i => i+x)
          ).subscribe(x => console.log(x));
          */
         //Observable.fromEvent(document, 'click').subscribe(x => console.log(x));
         this.searchSubject$
         .debounceTime(200)
         .subscribe(x => console.log('debounced ',x));
          
  }
  inputChanged($event){
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }

  ngOnDestroy(){
    //this.mySubject$.unsubscribe();

    //this.observable$.unsubscribe();
  }
}
