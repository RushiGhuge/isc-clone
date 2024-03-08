import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { IscReducer } from '../Store/iscData.reducer';
import { provideEffects } from '@ngrx/effects';
import { IscEffects } from '../Store/iscData.effects';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(HttpClientModule), provideStore({ 'IscData': IscReducer }), provideEffects([IscEffects])],
};
