import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-banner-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonComponent],
  templateUrl: './banner-contact.component.html',
})
export class BannerContactComponent  implements OnDestroy,OnInit {

  bannerTitle: string = "";
  bannerText: string = "";

  // ----
  private translateSubscription: Subscription | undefined;

  constructor(private translate: TranslateService)  {
    this.translateSubscription = this.translate.onLangChange.subscribe(() => {
      this.updateTranslate();
    });
  }

  ngOnInit() {
    this.updateTranslate();
  }
  ngOnChanges() {
    this.updateTranslate();
  }

  private updateTranslate() {
    this.bannerTitle = this.translate.instant('banner-contact.bannerTitle');
    this.bannerText = this.translate.instant('banner-contact.bannerText');
  }
  ngOnDestroy() {
    this.translateSubscription?.unsubscribe();
  }

}
