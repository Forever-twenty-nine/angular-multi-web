import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
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
