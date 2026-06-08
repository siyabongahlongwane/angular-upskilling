import { createReducer, on } from "@ngrx/store";
import { CounterPageActions } from "./actions";

export interface Counter {
    counter: number
} 
export const intitialState: Counter = {
    counter: 0
};

export const counterReducer = createReducer(
    intitialState,
    on(CounterPageActions.increment,
        (state) => ({...state, counter: state.counter + 1})
    ),
    on(CounterPageActions.decrement, 
        (state) => ({...state, counter: state.counter - 1})
    ),
    on(CounterPageActions.reset,
        (state) => ({...intitialState})
    )
);