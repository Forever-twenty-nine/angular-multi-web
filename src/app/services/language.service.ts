import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly LANG_KEY = 'app_languaje';
  private languageChangedSource = new Subject<string>();
  languageChanged$ = this.languageChangedSource.asObservable();

  private input = new BehaviorSubject<string>('');
  private title = new BehaviorSubject<string>('');
  private text = new BehaviorSubject<string>('');

  constructor(private translate: TranslateService, private router: Router) {

    const savedLanguage = localStorage.getItem(this.LANG_KEY);

    if (savedLanguage) {
      this.translate.use(savedLanguage);
    } else {
      const browserLang = this.translate.getBrowserLang();
      var defaultLang = 'en'
      if (browserLang) {
        defaultLang = browserLang.match(/en|es/) ? browserLang : 'en';
      }
      this.translate.use(defaultLang);
    }
    // Escuchar cambios de ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const url = event.url;
        if (url.startsWith('/en/')) {
          this.translate.use('en');
          localStorage.setItem(this.LANG_KEY, 'en');
          this.languageChangedSource.next('en');
        } else if (url.startsWith('/es/')) {
          this.translate.use('es');
          localStorage.setItem(this.LANG_KEY, 'es');
          this.languageChangedSource.next('es');
        }
      }
    });
  }
  // -----
  setLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem(this.LANG_KEY, language);
    this.languageChangedSource.next(language);
  }
  // -----
  getCurrentLanguage(): 'en' | 'es' {
    return this.translate.currentLang as 'en' | 'es';
  }
  // -----
  public changeString(input: string) {
    this.input.next(input);
  }
  // -----
}
