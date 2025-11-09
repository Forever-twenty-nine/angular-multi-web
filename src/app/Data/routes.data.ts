import { RouteInfo } from '../Models/route-info.model';

export const availableRoutes: RouteInfo[] = [
  {
    path: { en: 'home', es: 'inicio' },
    labels: { en: 'Home', es: 'Inicio' },
    routePrefix: { en: '/en/', es: '/es/' },
    title: { en: 'Home', es: 'Inicio' },
  },
  {
    path: { en: 'about-us', es: 'acerca-de' },
    labels: { en: 'About', es: 'Acerca de' },
    routePrefix: { en: '/en/', es: '/es/' },
    title: { en: 'About', es: 'Acerca de' },
  },
  {
    path: { en: 'technologies', es: 'tecnologias' },
    labels: { en: 'technologies', es: 'tecnologias' },
    routePrefix: { en: '/en/', es: '/es/' },
    title: { en: 'technologies', es: 'tecnologias' },
  },
  {
    path: { en: 'contact', es: 'contacto' },
    labels: { en: 'Contact', es: 'Contacto' },
    routePrefix: { en: '/en/', es: '/es/' },
    title: { en: 'Contact', es: 'Contacto' },
  }
];
