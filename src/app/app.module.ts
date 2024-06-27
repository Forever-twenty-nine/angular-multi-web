import { NgModule } from '@angular/core';
import { HttpBackend, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// pages
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ClientsComponent } from './Pages/clients/clients.component';
import { TechnologiesComponent } from './Pages/technologies/technologies.component';
import { NewsComponent } from './Pages/news/news.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LegalWarningComponent } from './Pages/Legal/legal-warning/legal-warning.component';
import { PrivacyPolicyComponent } from './Pages/Legal/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './Pages/Legal/cookie-policy/cookie-policy.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { NavFooterComponent } from './Components/nav-footer/nav-footer.component';
import { HeroComponent } from './Components/hero/hero.component';
//translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TitleSectionComponent } from './Components/title-section/title-section.component';
import { IconLangComponent } from './Components/nav-select-language/icon-lang/icon-lang.component';
import { NavHeaderComponent } from './Components/nav-header/nav-header.component';
import { NavSelectLanguageComponent } from './Components/nav-select-language/nav-select-language.component';
import { BoxComponent } from './Components/box/box.component';
import { IconTriangleComponent } from './Components/icon-triangle/icon-triangle.component';
import { IconTriangleRotateComponent } from './Components/icon-triangle-rotate/icon-triangle-rotate.component';
import { ButtonComponent } from './Components/button/button.component';

// multitranslate
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { LogisticSoftwareComponent } from './Pages/web-Services/logistic-software/logistic-software.component';
import { MicrosoftComponent } from './Pages/web-Services/microsoft/microsoft.component';
import { BusinessIntelligenceComponent } from './Pages/web-Services/business-intelligence/business-intelligence.component';
import { BannerContactComponent } from './Components/banner-contact/banner-contact.component';
import { NavLegalFooterComponent } from './Components/nav-legal-footer/nav-legal-footer.component';
import { LegalWarningEsComponent } from './Pages/Legal/legal-warning/legal-warning-es/legal-warning-es.component';
import { LegalWarningEnComponent } from './Pages/Legal/legal-warning/legal-warning-en/legal-warning-en.component';
import { BoxPostComponent } from './Components/box-post/box-post.component';
import { CookiePolicyEsComponent } from './Pages/Legal/cookie-policy/cookie-policy-es/cookie-policy-es.component';
import { CookiePolicyEnComponent } from './Pages/Legal/cookie-policy/cookie-policy-en/cookie-policy-en.component';
import { PrivacyPolicyEsComponent } from './Pages/Legal/privacy-policy/privacy-policy-es/privacy-policy-es.component';
import { PrivacyPolicyEnComponent } from './Pages/Legal/privacy-policy/privacy-policy-en/privacy-policy-en.component';


export function HttpLoaderFactory(http: HttpBackend) {
  return new MultiTranslateHttpLoader(http,
    [
      './assets/i18n/home/',
      './assets/i18n/about-us/',
      './assets/i18n/contact/',
      './assets/i18n/clients/',
      './assets/i18n/technologies/',
      './assets/i18n/news/',
      './assets/i18n/microsoft/',
      './assets/i18n/logistic-software/',
      './assets/i18n/business-intelligence/',
      './assets/i18n/hero/',
      './assets/i18n/title-section/',
      './assets/i18n/box/',
      './assets/i18n/banner-contact/',
      './assets/i18n/button/'

    ]);
}

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        AboutUsComponent,
        ClientsComponent,
        TechnologiesComponent,
        NewsComponent,
        ContactComponent,
        LegalWarningComponent,
        PrivacyPolicyComponent,
        CookiePolicyComponent,
        HeaderComponent,
        NavHeaderComponent,
        NavSelectLanguageComponent,
        FooterComponent,
        NavFooterComponent,
        HeroComponent,
        TitleSectionComponent,
        IconLangComponent,
        BoxComponent,
        IconTriangleComponent,
        IconTriangleRotateComponent,
        ButtonComponent,
        LogisticSoftwareComponent,
        MicrosoftComponent,
        BusinessIntelligenceComponent,
        BannerContactComponent,
        NavLegalFooterComponent,
        LegalWarningEsComponent,
        LegalWarningEnComponent,
        LegalWarningComponent,
        BoxPostComponent,
        CookiePolicyEsComponent,
        CookiePolicyEnComponent,
        CookiePolicyComponent,
        PrivacyPolicyEsComponent,
        PrivacyPolicyEnComponent,
        PrivacyPolicyComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpBackend]
            }
        })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
