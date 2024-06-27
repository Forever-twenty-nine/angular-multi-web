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
    path: { en: 'contact', es: 'contacto' },
    labels: { en: 'Contact', es: 'Contacto' },
    routePrefix: { en: '/en/', es: '/es/' },
    title: { en: 'Contact', es: 'Contacto' },
  },
  {
    path: { en: 'services', es: 'servicios' },
    labels: { en: 'services', es: 'Servicios' },
    routePrefix: { en: '/en/', es: '/es/' },
    title: { en: 'Services', es: 'Servicios' },
    Children: [
      {
        path: { en: 'software-logistic', es: 'software-logistica' },
        labels: { en: 'software-logistic', es: 'Software Logistica' },
        routePrefix: { en: '/en/', es: '/es/' },
        title: { en: 'software-logistic', es: 'software-logistica' },
      },
      {
        path: { en: 'microsoft', es: 'microsoft' },
        labels: { en: 'Microsoft', es: 'Microsoft' },
        routePrefix: { en: '/en/', es: '/es/' },
        title: { en: 'microsoft', es: 'microsoft' },
      },
      {
        path: { en: 'business-intelligence', es: 'business-intelligence' },
        labels: { en: 'business-intelligence', es: 'Business Intelligence' },
        routePrefix: { en: '/en/', es: '/es/' },
        title: { en: 'business-intelligence', es: 'business-intelligence' },
      },
    ],
  },
  {
    path: { en: 'clients', es: 'clientes' },
    labels: { en: 'clients', es: 'clientes' },
    routePrefix: { en: '/en/', es: '/es/' },
    title: { en: 'clients', es: 'clientes' },
  },
  {
    path: { en: 'technologies', es: 'tecnologias' },
    labels: { en: 'technologies', es: 'tecnologias' },
    routePrefix: { en: '/en/', es: '/es/' },
    title: { en: 'technologies', es: 'tecnologias' },
  },
  {
    path: { en: 'news', es: 'novedades' },
    labels: { en: 'news', es: 'novedades' },
    routePrefix: { en: '/en/', es: '/es/' },
    title: { en: 'news', es: 'novedades' },
  }
];
