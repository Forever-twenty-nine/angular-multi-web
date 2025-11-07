import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'app-cookie-policy-en',
  templateUrl: './cookie-policy-en.component.html',
})
export class CookiePolicyEnComponent {

}
