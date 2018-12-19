import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy {

  secondes: number;
  counterSubcription: Subscription

  constructor() {}

  ngOnInit(): void {
      const counter = interval(1000);
      this.counterSubcription = counter.subscribe(
                                  (value: number) => {
                                    this.secondes = value;
                                  }
                                );

  }

  ngOnDestroy(): void {
    this.counterSubcription.unsubscribe();
  }
}
