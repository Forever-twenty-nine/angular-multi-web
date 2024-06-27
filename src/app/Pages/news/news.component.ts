import { Component, OnDestroy, OnInit } from '@angular/core';
// translate
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent  implements OnDestroy,OnInit {
  tag: string = "";
  title: string = ""; 

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
    this.tag = this.translate.instant('hero-news.tag');
    this.title = this.translate.instant('hero-news.title');
  }

  ngOnDestroy() {
    this.translateSubscription?.unsubscribe();
  }


}
