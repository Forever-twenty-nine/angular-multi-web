import { Component, OnDestroy } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';
import { availableRoutes } from '../../Data/routes.data';
import { legalRoutes } from '../../Data/legal.data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-select-language',
  templateUrl: './nav-select-language.component.html',
  styleUrl: './nav-select-language.component.css'
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
