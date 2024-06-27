import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  @Input() heroClass: string | undefined;
  @Input() heroTag: string | undefined;
  @Input() heroTitle: string | undefined;
  @Input() heroText: string | undefined;
  @Input() btnContact: boolean = false ;
  @Input() btnDossier: boolean = false;
}
