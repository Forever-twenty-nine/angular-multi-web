import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { PrivacyPolicyEnComponent } from './privacy-policy-en/privacy-policy-en.component';
import { PrivacyPolicyEsComponent } from './privacy-policy-es/privacy-policy-es.component';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [CommonModule, PrivacyPolicyEnComponent, PrivacyPolicyEsComponent, TranslateModule],
  selector: 'app-privacy-policy',
  standalone: true,
  templateUrl: './privacy-policy.component.html'
})
export class PrivacyPolicyComponent {
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
