# Multilanguaje Site

## despues de bajar los cambios

```bash
  npm install
```

### Components

componentes disponibles dentro de la app

- hero
- nav-footer
- box
- button
- icon-triangle
- icon-triangle-rotate
- nav-footer
- nav-header
- nav-select-language
- title-section

### shared

componentes que son compartidos en en la app y no estan en routing

- header
- footer

### Pages

paginas que se encuentra dentro de routing de la app

- home
- aboutUs
- contact
- legal
  - cookie-policy
  - legal- warning
  - privacy-policy
- news
- technologies

### Traducciones

1 - instalar la libreria  __ngx-translate-multi-http-loader__

```bash
npm install ngx-translate-multi-http-loader --save
```

2 - agregar a la carpeta __assets/i18n__ la carpeta con el nombre de la pagina que se quiere traducir ej: __home__.

3 - En el archivo __app.module.ts__ agregamos la carpeta al array de carpetas registradas para las traducciones.

```typescript
// app.module.ts
// ------
export function HttpLoaderFactory(http: HttpBackend) {
  return new MultiTranslateHttpLoader(http,
    [
      './assets/i18n/',
      './assets/i18n/home/' //<===
    ]);
}
// -----
```

4 - Dentro de la misma crear dos archivos json uno en.json y otro es.json que tendras las traducciones correspondientes a la pagina.

```json
// en.json
{
  "home": {
    "title": "Home",
    "subTitle": "Welcome to the home page"
  }
}
```

```json
// es.json
{
  "home": {
    "title": "Home",
    "subTitle": "Welcome to the home page"
  }
}
```

5 - Dentro de la pagina importar el Translate module para poder implementar traducciones.

```html
<!-- home.component.html -->
<div class="flex justify-center items-center h-screen">
  <div class="bg-white shadow-md rounded-lg p-6 max-w-md">
    <h1 class="text-2xl font-bold mb-2">{{ 'home.title' | translate }}</h1>
    <p class="text-gray-700">{{ 'home.subTitle' | translate }}</p>
  </div>
</div>
```

> Las traduciones se hacen dentro de doble corchetes __{{}}__. Lo primero es la referencia al documento json y esta entre comillas simple __'home.title'__ luego viene __| translate__ lo cual indicamos que utilizamos el pipe __Translate__
