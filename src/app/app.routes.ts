import { Routes } from '@angular/router';
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

export const routes: Routes = [
  // Redirección inicial
  { path: '', redirectTo: 'es/inicio', pathMatch: 'full' },
  
  // Home
  { path: 'es/inicio', component: HomeComponent },
  { path: 'en/home', component: HomeComponent },
  
  // About us
  { path: 'es/acerca-de', component: AboutUsComponent },
  { path: 'en/about-us', component: AboutUsComponent },
  
  // Contact
  { path: 'es/contacto', component: ContactComponent },
  { path: 'en/contact', component: ContactComponent },
  
  // Web Services
  { path: 'es/microsoft', component: MicrosoftComponent },
  { path: 'en/microsoft', component: MicrosoftComponent },
  { path: 'es/software-logistica', component: LogisticSoftwareComponent },
  { path: 'en/logistic-software', component: LogisticSoftwareComponent },
  { path: 'es/business-intelligence', component: BusinessIntelligenceComponent },
  { path: 'en/business-intelligence', component: BusinessIntelligenceComponent },
  
  // Legal
  { path: 'es/politica-cookie', component: CookiePolicyComponent },
  { path: 'en/cookie-policy', component: CookiePolicyComponent },
  { path: 'es/aviso-legal', component: LegalWarningComponent },
  { path: 'en/legal-warning', component: LegalWarningComponent },
  { path: 'en/privacy-policy', component: PrivacyPolicyComponent },
  { path: 'es/politica-privacidad', component: PrivacyPolicyComponent },
  
  // Clients
  { path: 'es/clientes', component: ClientsComponent },
  { path: 'en/clients', component: ClientsComponent },
  
  // Technologies
  { path: 'es/tecnologias', component: TechnologiesComponent },
  { path: 'en/technologies', component: TechnologiesComponent },
  
  // News
  { path: 'es/novedades', component: NewsComponent },
  { path: 'en/news', component: NewsComponent },
];
