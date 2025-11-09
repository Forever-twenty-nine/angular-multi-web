import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [TranslateModule],
  selector: 'app-nav-select-language',
  standalone: true,
  templateUrl: './nav-select-language.component.html',
  styleUrls: ['./nav-select-language.component.css']
})

export class NavSelectLanguageComponent {
  languageText = '';
  constructor(public languageService: LanguageService) {
    this.languageText = languageService.getCurrentLanguage().toUpperCase();
    this.languageService.languageChanged$.subscribe(language => {
      this.languageText = language.toUpperCase();
    });
  }

  toggleLanguage() {
    const newLang = this.languageText === 'ES' ? 'en' : 'es';
    this.languageService.setLanguage(newLang as 'en' | 'es');
    this.languageText = newLang.toUpperCase();
  }
}
