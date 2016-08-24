import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { CounterActions } from '../actions/counter.actions';

@Component({
  selector: 'counter',
  template: `
  <p>
    Clicked: {{ count$ | async }} times
    <button (click)="actions.increment()">+</button>
    <button (click)="actions.decrement()">-</button>
  </p>
  `
})
export class Counter {
  @select() count$: Observable<number>;

  // TODO: test name, function, and path selectors.

  constructor(private actions: CounterActions) {}
}