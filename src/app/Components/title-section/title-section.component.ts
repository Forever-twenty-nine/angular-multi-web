import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.css'
})
export class TitleSectionComponent {

  @Input() titleSection: string | undefined;

}
