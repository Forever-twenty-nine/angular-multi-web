import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [CommonModule, TranslateModule],
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent {
  // Component is now clean and uses only the redesigned template
}
