import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavFooterComponent } from '../../Components/nav-footer/nav-footer.component';
import { NavLegalFooterComponent } from '../../Components/nav-legal-footer/nav-legal-footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [CommonModule, NavFooterComponent, NavLegalFooterComponent, TranslateModule],
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html'
})
export class FooterComponent {

}
