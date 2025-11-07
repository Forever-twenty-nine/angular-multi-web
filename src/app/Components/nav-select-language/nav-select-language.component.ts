import { availableRoutes } from '../../Data/routes.data';
import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { IconLangComponent } from './icon-lang/icon-lang.component';
import { LanguageService } from '../../services/language.service';
import { legalRoutes } from '../../Data/legal.data';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [CommonModule, IconLangComponent, TranslateModule],
  selector: 'app-nav-select-language',
  standalone: true,
  templateUrl: './nav-select-language.component.html'
})
export class NavSelectLanguageComponent implements OnDestroy {

  languageText: string = '';
  routes = availableRoutes;
  legalRoutes = legalRoutes;
  private languageSubscription: Subscription | undefined;

  constructor(private router: Router, public languageService: LanguageService) {

    this.languageText = languageService.getCurrentLanguage().toUpperCase();
    this.languageSubscription = this.languageService.languageChanged$.subscribe(language => {
      this.languageText = language.toUpperCase();
    });

  }

  changeLanguage(language: 'en' | 'es') {

    this.languageService.setLanguage(language);
    this.languageText = language.toUpperCase();
    this.updateUrl(language);
  }

  updateUrl(language: 'en' | 'es') {

    const currentUrl = this.router.url;
    const currentPath = currentUrl.split('/').slice(2).join('/');
    const currentLegalPath = currentUrl.split('/').slice(2).join('/');
    const routeInfo = this.routes.find(route => {
      return Object.values(route.path).includes(currentPath);
    });
    const routeLegalInfo = this.legalRoutes.find(route => {
      return Object.values(route.path).includes(currentLegalPath);
    })
    if (routeInfo) {

      const newLanguagePrefix = '/' + language + '/';
      const newLanguagePatch = routeInfo.path[language]
      const newUrl = newLanguagePrefix + newLanguagePatch;
      this.router.navigateByUrl(newUrl);

    }
    if (routeLegalInfo) {

      const newLanguagePrefix = '/' + language + '/';
      const newLanguagePatch = routeLegalInfo.path[language]
      const newUrl = newLanguagePrefix + newLanguagePatch;
      this.router.navigateByUrl(newUrl);

    }
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
