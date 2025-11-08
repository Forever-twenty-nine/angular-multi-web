import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavLegalFooterComponent } from '../../Components/nav-legal-footer/nav-legal-footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [
    CommonModule, 
    NavLegalFooterComponent, 
    TranslateModule
  ],
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
