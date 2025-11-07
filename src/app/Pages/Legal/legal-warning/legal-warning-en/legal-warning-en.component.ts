import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'app-legal-warning-en',
  templateUrl: './legal-warning-en.component.html',
})
export class LegalWarningEnComponent {

}
