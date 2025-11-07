import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { CookiePolicyEnComponent } from './cookie-policy-en/cookie-policy-en.component';
import { CookiePolicyEsComponent } from './cookie-policy-es/cookie-policy-es.component';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [CommonModule, CookiePolicyEnComponent, CookiePolicyEsComponent, TranslateModule],
  selector: 'app-cookie-policy',
  standalone: true,
  templateUrl: './cookie-policy.component.html'
})
export class CookiePolicyComponent implements OnChanges {

  languageActive = "";
  private languageSubscription: Subscription | undefined;

  constructor(private languageService: LanguageService) {
    this.languageActive = this.languageService.getCurrentLanguage();
    this.languageSubscription = this.languageService.languageChanged$.subscribe(language => {
      this.languageActive = language;
    });
  }

  ngOnChanges(): void {
    this.languageActive = this.languageService.getCurrentLanguage();
    console.log(this.languageActive);
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

}
