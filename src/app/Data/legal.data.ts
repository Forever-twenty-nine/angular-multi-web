import { RouteInfo } from '../Models/route-info.model';

export const legalRoutes: RouteInfo[] = [
  {
    path: { en: 'cookie-policy', es: 'politica-cookie' },
    labels: { en: 'Cookie policy', es: 'Politica de coockie' },
    routePrefix: { en: '/en/', es: '/es/' },
    title: { en: 'cookie-policy', es: 'Link a pantalla de cookies' },
  },
  {
    path: { en: 'legal-warning', es: 'aviso-legal' },
    labels: { en: 'Legal Warning', es: 'Aviso Legal' },
    routePrefix: { en: '/en/', es: '/es/' },
    title: { en: 'legal-warning', es: '"Link a pantalla de aviso legal' },
  },
  {
    path: { en: 'privacy-policy', es: 'politica-privacidad' },
    labels: { en: 'Privacy Policy', es: 'Politica de Privacidad' },
    routePrefix: { en: '/en/', es: '/es/' },
    title: { en: 'privacy-policy', es: 'Link a pantalla de aviso legal' },
  },
];
