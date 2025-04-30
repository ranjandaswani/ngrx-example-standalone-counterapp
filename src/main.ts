import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideStore, select } from '@ngrx/store';
import { counterReducer } from './app/state/counter.reducer';

bootstrapApplication(AppComponent, {
  providers: [provideStore({count: counterReducer})]
});

