import { Counter } from './../../../../core/state/counter/counter.reducer';
import { map, Observable, of } from 'rxjs';
import { CounterChildTwo } from '../counter-child-two/counter-child-two';
import { CounterChildOne } from './../counter-child-one/counter-child-one';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { CounterPageActions } from '../../../../core/state/counter/actions';
import { CustomCounter } from '../../custom-counter/custom-counter';

@Component({
  selector: 'app-counter-parent',
  imports: [CounterChildOne, CounterChildTwo, AsyncPipe, CustomCounter],
  templateUrl: './counter-parent.html',
  styleUrl: './counter-parent.scss',
})
export class CounterParent {
  counter$: Observable<number> = of(0);

  store = inject(Store<Counter>);

  ngOnInit() {
    this.counter$ = this.store.select('counter').pipe(map(({ counter }) => counter));
  }

  increment() {
    this.store.dispatch(CounterPageActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterPageActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterPageActions.reset());
  }
}
