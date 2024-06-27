import { Component, OnDestroy, OnInit } from '@angular/core';
// translate
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-banner-contact',
  templateUrl: './banner-contact.component.html',
  styleUrl: './banner-contact.component.css'
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
