import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {

  @Input() heroClass: string | undefined;
  @Input() heroTag: string | undefined;
  @Input() heroTitle: string | undefined;
  @Input() heroText: string | undefined;
  @Input() btnContact: boolean = false ;
  @Input() btnDossier: boolean = false;
}
