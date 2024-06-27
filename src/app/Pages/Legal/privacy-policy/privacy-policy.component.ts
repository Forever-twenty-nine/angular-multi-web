import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-privacy-policy',
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
