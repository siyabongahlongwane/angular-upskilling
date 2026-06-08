import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, map } from 'rxjs';
import { Counter } from '../../../../core/state/counter/counter.reducer';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-child-one',
  imports: [AsyncPipe],
  templateUrl: './counter-child-one.html',
  styleUrl: './counter-child-one.scss',
})
export class CounterChildOne {
  counter$: Observable<number> = of(0);

  store = inject(Store<Counter>);

  ngOnInit() {
    this.counter$ = this.store.select('counter').pipe(map(({ counter }) => counter));
  }
}
