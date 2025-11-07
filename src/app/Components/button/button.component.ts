import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {

  btnLabel: string = "";
  @Input() btnUrl: string | undefined;
  @Input() btnType: string | undefined;
  @Input() btnname: string | undefined;

  constructor(private router: Router, private languageService: LanguageService) {
    const languageButton = this.languageService.getCurrentLanguage();
  }

}
