import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// pages
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { CookiePolicyComponent } from './Pages/Legal/cookie-policy/cookie-policy.component';
import { LegalWarningComponent } from './Pages/Legal/legal-warning/legal-warning.component';
import { PrivacyPolicyComponent } from './Pages/Legal/privacy-policy/privacy-policy.component';
import { NewsComponent } from './Pages/news/news.component';
import { TechnologiesComponent } from './Pages/technologies/technologies.component';
import { ClientsComponent } from './Pages/clients/clients.component';
import { MicrosoftComponent } from './Pages/web-Services/microsoft/microsoft.component';
import { LogisticSoftwareComponent } from './Pages/web-Services/logistic-software/logistic-software.component';
import { BusinessIntelligenceComponent } from './Pages/web-Services/business-intelligence/business-intelligence.component';

const routes: Routes = [
  // exeptions
  { path: '', redirectTo: 'es/inicio', pathMatch: 'full' },
  // home
  { path: 'es/inicio', component: HomeComponent },
  { path: 'en/home', component: HomeComponent },
  // about us
  { path: 'es/acerca-de', component: AboutUsComponent },
  { path: 'en/about-us', component: AboutUsComponent },
  // contact
  { path: 'es/contacto', component: ContactComponent },
  { path: 'en/contact', component: ContactComponent },
  // web-services
  { path: 'es/microsoft', component: MicrosoftComponent },
  { path: 'en/microsoft', component: MicrosoftComponent },
  { path: 'es/software-logistica', component: LogisticSoftwareComponent},
  { path: 'en/logistic-software', component: LogisticSoftwareComponent },
  { path: 'es/business-intelligence', component: BusinessIntelligenceComponent },
  { path: 'en/business-intelligence', component: BusinessIntelligenceComponent },
  // legal
  { path: 'es/politica-cookie', component: CookiePolicyComponent },
  { path: 'en/cookie-policy', component: CookiePolicyComponent },
  { path: 'es/aviso-legal', component: LegalWarningComponent },
  { path: 'en/legal-warning', component: LegalWarningComponent },
  { path: 'en/privacy-policy', component: PrivacyPolicyComponent },
  { path: 'es/politica-privacidad', component: PrivacyPolicyComponent },
  // clients
  { path: 'es/clientes', component: ClientsComponent },
  { path: 'en/clients', component: ClientsComponent },
  // technologies
  { path: 'es/tecnologias', component: TechnologiesComponent },
  { path: 'en/technologies', component: TechnologiesComponent },
  // news
  { path: 'es/novedades', component: NewsComponent },
  { path: 'en/news', component: NewsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
