import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'app-privacy-policy-en',
  templateUrl: './privacy-policy-en.component.html',
})
export class PrivacyPolicyEnComponent {

}
