import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { LegalWarningEnComponent } from './legal-warning-en/legal-warning-en.component';
import { LegalWarningEsComponent } from './legal-warning-es/legal-warning-es.component';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [CommonModule, LegalWarningEnComponent, LegalWarningEsComponent, TranslateModule],
  selector: 'app-legal-warning',
  standalone: true,
  templateUrl: './legal-warning.component.html'
})
export class LegalWarningComponent implements OnChanges {

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
