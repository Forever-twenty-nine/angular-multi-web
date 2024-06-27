import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { legalRoutes } from '../../Data/legal.data';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-nav-legal-footer',
  templateUrl: './nav-legal-footer.component.html',
  styleUrl: './nav-legal-footer.component.css'
})
export class NavLegalFooterComponent {

routes = legalRoutes;

constructor(private router: Router, public language: LanguageService) { }


}
