import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subscription} from 'rxjs';
import {filter, map, take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor() {}

  ngOnInit() {

    // observer w/ operators
    interval(1000)
      .pipe(
        take(50),
        filter((value) => value % 2 === 0),
        map(value => 2 ** value)
      ).subscribe((value) => {
        console.log(value);
      });

    // // standard observer w/ interval()
    // this.subscription = interval(1000).subscribe(
    //                          (value) => { console.log(value); },
    //                         (error) => { console.log(error); });

    // // custom observer creation = of interval
    // const customInterval = new Observable((observer) => {
    //   let counter = 0;
    //
    //   setInterval(() => {
    //
    //     // completion (not meaningful)
    //     if (counter === 10) {
    //       observer.complete();
    //     }
    //
    //     // error management
    //     if (counter === 15) {
    //       observer.error(new Error('no counter can be bigger then 10 :)'));
    //     }
    //
    //     observer.next(counter++);
    //     }, 1000);
    // });
    //
    // // accessing custom observer
    // customInterval.subscribe((value) => console.log(value),
    //                         (error) => console.log(error),
    //                      () => console.log('completed'));
  }

  /**
   * It is mandatory only for Observables except angular provided ones such as this.route.params
   */
  ngOnDestroy() {
    console.log('ngOnDestroy');

    // this.subscription.unsubscribe();
  }
}
