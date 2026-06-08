import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { employeeReducer } from './core/state/employee/employee.reducer';
import { counterReducer } from './core/state/counter/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideStore({ employees: employeeReducer, counter: counterReducer }), // registers reducers with the ngrx store
    provideEffects(), // registers effects with the ngrx store
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), // enables store devtools,
  ],
};
