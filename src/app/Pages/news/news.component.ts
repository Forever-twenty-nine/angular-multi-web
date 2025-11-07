import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { HeroComponent } from '../../Components/hero/hero.component';
import { BoxPostComponent } from '../../Components/box-post/box-post.component';

// translate
// components

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeroComponent, BoxPostComponent],
  templateUrl: './news.component.html',
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
