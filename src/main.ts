import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  console.log ( 'mod: prod ::: configuration === production' );
} else {
  console.log ( 'mod: dev ::: configuration !== production' );
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
