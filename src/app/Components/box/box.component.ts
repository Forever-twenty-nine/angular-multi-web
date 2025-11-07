import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './box.component.html',
})
export class BoxComponent {
  @Input() boxClass: string | undefined;
  @Input() boxTitle: string | undefined;
  @Input() boxStrongBig: string | undefined;
  @Input() boxStrongBigHighlight: string | undefined;
  @Input() boxText: string | undefined;
  @Input() boxText2: string | undefined;
  @Input() boxText3: string | undefined;
  @Input() boxImg: string | undefined;
  @Input() boxImgAlt: string | undefined;
  @Input() boxImgClass: string | undefined;
}
