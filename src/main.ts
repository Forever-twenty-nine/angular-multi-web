import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, APP_INITIALIZER } from '@angular/core';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { HttpBackend } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';

// Importar las rutas standalone
import { routes } from './app/app.routes';

// Factory function para el loader de traducción
export function HttpLoaderFactory(http: HttpBackend) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/home/', suffix: '.json' },
    { prefix: './assets/i18n/about-us/', suffix: '.json' },
    { prefix: './assets/i18n/contact/', suffix: '.json' },
    { prefix: './assets/i18n/technologies/', suffix: '.json' },
    { prefix: './assets/i18n/button/', suffix: '.json' }
  ]);
}

// Factory para inicializar el servicio de traducción
export function initializeTranslate(translateService: TranslateService) {
  return () => {
    translateService.setDefaultLang('es');
    return translateService.use('es').toPromise();
  };
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpBackend]
        }
      })
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslate,
      deps: [TranslateService],
      multi: true
    }
  ]
}).catch(err => console.error(err));
