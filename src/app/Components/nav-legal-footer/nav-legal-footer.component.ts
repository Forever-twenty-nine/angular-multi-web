import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { legalRoutes } from '../../Data/legal.data';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [CommonModule, RouterLink, TranslateModule],
  selector: 'app-nav-legal-footer',
  standalone: true,
  templateUrl: './nav-legal-footer.component.html'
})
export class NavLegalFooterComponent {

routes = legalRoutes;

constructor(private router: Router, public language: LanguageService) { }


}
