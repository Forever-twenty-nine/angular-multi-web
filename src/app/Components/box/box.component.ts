import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
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
