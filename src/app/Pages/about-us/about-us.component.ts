import { Component, OnDestroy, OnInit } from '@angular/core';
// translate
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent  implements OnDestroy,OnInit {
  //
  tag: string = "";
  title: string = "";
  text: string = "";

  titleOrigin: string = "";
  titlePhilosophy: string = "";
  titleValues: string = "";
  titleTrajectory: string = "";
  titleMethodology: string = "";
  titleFuture: string = "";

  boxOriginOneStrongBig: string = "";
  boxOriginOneText: string = "";
  boxOriginTwoStrongBig: string = "";
  boxOriginTwoText: string = "";
  boxOriginThreeStrongBig: string = "";
  boxOriginThreeText: string = "";
  boxOriginFourStrongBigHighlight: string = "";
  boxOriginFourText: string = "";

  boxValueOneImgAlt: string = "";
  boxValueOneTitle: string = "";
  boxValueOneText: string = "";
  boxValueOneText2: string = "";
  boxValueTwoImgAlt: string = "";
  boxValueTwoTitle: string = "";
  boxValueTwoText: string = "";
  boxValueTwoText2: string = "";
  boxValueThreeImgAlt: string = "";
  boxValueThreeTitle: string = "";
  boxValueThreeText: string = "";
  boxValueFourImgAlt: string = "";
  boxValueFourTitle: string = "";
  boxValueFourText: string = "";

  boxTrajectoryOneText: string = "";
  boxTrajectoryOneText2: string = "";

  boxMethodologyOneImgAlt: string = "";
  boxMethodologyOneTitle: string = "";
  boxMethodologyOneText: string = "";
  boxMethodologyOneText2: string = "";
  boxMethodologyTwoImgAlt: string = "";
  boxMethodologyTwoTitle: string = "";
  boxMethodologyTwoText: string = "";
  boxMethodologyTwoText2: string = "";
  boxMethodologyThreeImgAlt: string = "";
  boxMethodologyThreeTitle: string = "";
  boxMethodologyThreeText: string = "";

  boxFutureOneStrongBigHighlight: string = "";
  boxFutureOneText: string = "";


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
    this.tag = this.translate.instant('hero-about-us.tag');
    this.title = this.translate.instant('hero-about-us.title');
    this.text = this.translate.instant('hero-about-us.text');

    this.titleOrigin = this.translate.instant('title-section-about-us.titleOrigin');
    this.titlePhilosophy = this.translate.instant('title-section-about-us.titlePhilosophy');
    this.titleValues = this.translate.instant('title-section-about-us.titleValues');
    this.titleTrajectory = this.translate.instant('title-section-about-us.titleTrajectory');
    this.titleMethodology = this.translate.instant('title-section-about-us.titleMethodology');
    this.titleFuture = this.translate.instant('title-section-about-us.titleFuture');

    this.boxOriginOneStrongBig = this.translate.instant('box-about-us.boxOriginOneStrongBig');
    this.boxOriginOneText = this.translate.instant('box-about-us.boxOriginOneText');
    this.boxOriginTwoStrongBig = this.translate.instant('box-about-us.boxOriginTwoStrongBig');
    this.boxOriginTwoText = this.translate.instant('box-about-us.boxOriginTwoText');
    this.boxOriginThreeStrongBig = this.translate.instant('box-about-us.boxOriginThreeStrongBig');
    this.boxOriginThreeText = this.translate.instant('box-about-us.boxOriginThreeText');
    this.boxOriginFourStrongBigHighlight = this.translate.instant('box-about-us.boxOriginFourStrongBigHighlight');
    this.boxOriginFourText = this.translate.instant('box-about-us.boxOriginOneText');

    this.boxValueOneImgAlt = this.translate.instant('box-about-us.boxValueOneImgAlt');
    this.boxValueOneTitle = this.translate.instant('box-about-us.boxValueOneTitle');
    this.boxValueOneText = this.translate.instant('box-about-us.boxValueOneText');
    this.boxValueOneText2 = this.translate.instant('box-about-us.boxValueOneText2');
    this.boxValueTwoImgAlt = this.translate.instant('box-about-us.boxValueTwoImgAlt');
    this.boxValueTwoTitle = this.translate.instant('box-about-us.boxValueTwoTitle');
    this.boxValueTwoText = this.translate.instant('box-about-us.boxValueTwoText');
    this.boxValueTwoText2 = this.translate.instant('box-about-us.boxValueTwoText2');
    this.boxValueThreeImgAlt = this.translate.instant('box-about-us.boxValueThreeImgAlt');
    this.boxValueThreeTitle = this.translate.instant('box-about-us.boxValueThreeTitle');
    this.boxValueThreeText = this.translate.instant('box-about-us.boxValueThreeText');
    this.boxValueFourImgAlt = this.translate.instant('box-about-us.boxValueFourImgAlt');
    this.boxValueFourTitle = this.translate.instant('box-about-us.boxValueFourTitle');
    this.boxValueFourText = this.translate.instant('box-about-us.boxValueFourText');

    this.boxTrajectoryOneText = this.translate.instant('box-about-us.boxTrajectoryOneText');
    this.boxTrajectoryOneText2 = this.translate.instant('box-about-us.boxTrajectoryOneText2');

    this.boxMethodologyOneImgAlt = this.translate.instant('box-about-us.boxMethodologyOneImgAlt');
    this.boxMethodologyOneTitle = this.translate.instant('box-about-us.boxMethodologyOneTitle');
    this.boxMethodologyOneText = this.translate.instant('box-about-us.boxMethodologyOneText');
    this.boxMethodologyOneText2 = this.translate.instant('box-about-us.boxMethodologyOneText2');
    this.boxMethodologyTwoImgAlt = this.translate.instant('box-about-us.boxMethodologyTwoImgAlt');
    this.boxMethodologyTwoTitle = this.translate.instant('box-about-us.boxMethodologyTwoTitle');
    this.boxMethodologyTwoText = this.translate.instant('box-about-us.boxMethodologyTwoText');
    this.boxMethodologyTwoText2 = this.translate.instant('box-about-us.boxMethodologyTwoText2');
    this.boxMethodologyThreeImgAlt = this.translate.instant('box-about-us.boxMethodologyThreeImgAlt');
    this.boxMethodologyThreeTitle = this.translate.instant('box-about-us.boxMethodologyThreeTitle');
    this.boxMethodologyThreeText = this.translate.instant('box-about-us.boxMethodologyThreeText');

    this.boxFutureOneStrongBigHighlight = this.translate.instant('box-about-us.boxFutureOneStrongBigHighlight');
    this.boxFutureOneText = this.translate.instant('box-about-us.boxFutureOneText');
  }

  ngOnDestroy() {
    this.translateSubscription?.unsubscribe();
  }

}
