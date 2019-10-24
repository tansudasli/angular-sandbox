import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor() {}

  ngOnInit() {
    // interval(1000)
    //   .pipe(take(50))
    //   .subscribe((value) => {
    //     console.log(value);
    //   });

    // standard observer
    // this.subscription = interval(1000).subscribe((value) => { console.log(value); },
    //                                                    (error) => { console.log(error); });

    // custom observer of interval
    const customInterval = new Observable((observer) => {
      let counter = 0;
      setInterval(() => { observer.next(counter++); }, 1000);
    });

    customInterval.subscribe((value) => console.log(value));
  }

  /**
   * It is mandatory only for Observables except angular provided ones such as this.route.params
   */
  ngOnDestroy() {
    console.log('ngOnDestroy');

    // this.subscription.unsubscribe();
  }
}
