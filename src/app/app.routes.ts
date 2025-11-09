import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { TechnologiesComponent } from './Pages/technologies/technologies.component';

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

  // Technologies
  { path: 'es/tecnologias', component: TechnologiesComponent },
  { path: 'en/technologies', component: TechnologiesComponent },

];
