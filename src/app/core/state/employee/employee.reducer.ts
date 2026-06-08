import { createReducer } from "@ngrx/store";
import { AppState } from "../app.state";

export const intitialState: ReadonlyArray<AppState> = [
    {
        id: 1,
        name: 'Alex',
        username: 'alex',
        email: 'alex@gmail.com'
    },
    {
        id: 2,
        name: 'Alex',
        username: 'alex',
        email: 'alex@gmail.com'
    },
    {
        id: 3,
        name: 'Alex',
        username: 'alex',
        email: 'alex@gmail.com'
    },
];

export const employeeReducer = createReducer(intitialState);