# Documentación General de la Estructura del Proyecto: `sky-connect-explorer`

Este proyecto, **`sky-connect-explorer`**, es una aplicación desarrollada con **Next.js** que incluye diversas funcionalidades y componentes relacionados con la visualización y gestión de información sobre aeropuertos, mapas y zonas horarias.

## Estructura de Directorios

### Archivos principales del proyecto

- **`README.md`**: Contiene la documentación principal del proyecto.
- **`eslint.config.mjs`**: Configuración del linter ESLint.
- **`jest.config.ts`**: Configuración de Jest para pruebas unitarias.
- **`jest.setup.ts`**: Configuración adicional para Jest.
- **`next-env.d.ts`**: Declaraciones de tipos específicas para Next.js.
- **`next.config.ts`**: Configuración de Next.js.
- **`package-lock.json`**: Archivo de bloqueo de dependencias.
- **`package.json`**: Contiene las dependencias, scripts y configuraciones principales del proyecto.
- **`postcss.config.mjs`**: Configuración de PostCSS para procesar CSS.

### Directorio `public`

El directorio **`public`** contiene archivos estáticos como imágenes SVG que se utilizan en el proyecto:

- **`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`**: Imágenes utilizadas en diferentes partes de la interfaz.

### Directorio `src`

El directorio **`src`** contiene todo el código fuente de la aplicación, organizado en varios subdirectorios.

#### 1. **`app`**

Contiene la estructura principal de la aplicación:

- **`airports`**: Páginas y componentes relacionados con aeropuertos, incluyendo un componente específico por cada aeropuerto (`[id]`).
- **`favicon.ico`**: Ícono de la aplicación.
- **`globals.css`**: Estilos globales aplicados a la aplicación.
- **`layout.tsx`**: Componente que define el diseño de la aplicación.
- **`page.tsx`**: Página de inicio.

#### 2. **`assets`**

Contiene recursos estáticos como imágenes:

- **`bg.jpg`, `card-avatar.jpg`**: Imágenes de fondo y avatares.

#### 3. **`components`**

Contiene componentes reutilizables organizados en **átomos**, **moléculas**, **organismos** y **plantillas**.

- **Átomos**

  - Componentes pequeños como botones, íconos, y elementos básicos de la UI.
  - Ejemplos:
    - **`AppTitle`**: Título principal de la aplicación.
    - **`ClientSideToastContainer`**: Contenedor para notificaciones.
    - **`Loading`**: Componente de carga.
    - **`NoData`**: Componente que muestra un mensaje cuando no hay datos.
    - **Íconos**: Como `Airport`, `Info`, `Location`, `NoData`, `Search`, `Time`, `Zone`, etc.

- **Moléculas**

  - Combinación de átomos para formar componentes más complejos.
  - Ejemplos:
    - **`Clock`**: Componente para mostrar la hora.
    - **`FloatingHomeButton`**: Botón flotante para regresar a la página principal.
    - **`MapTooltip`**: Tooltip para mapas.
    - **`TablePagination`**: Paginación de tablas.
    - **`cards`**: Tarjetas de información de aeropuertos, zona horaria, etc.

- **Organismos**

  - Componentes más grandes que agrupan varias moléculas y átomos.
  - Ejemplos:
    - **`AppHeader`**: Encabezado de la aplicación.
    - **`Map`**: Componente de mapa.
    - **`SearchBar`**: Barra de búsqueda.

- **Plantillas**
  - Estructuras de páginas completas con componentes que definen el diseño general.
  - Ejemplos:
    - **`Home`**: Página de inicio.
    - **`Tabs`**: Componente para mostrar pestañas.

#### 4. **`hooks`**

Contiene hooks personalizados utilizados en la aplicación:

- **`useInfoWindow`**: Hook para manejar ventanas de información en el mapa.

#### 5. **`lib`**

Contiene librerías y utilidades de ayuda.

- **`constants`**: Archivos con constantes de la aplicación.
- **`utils`**: Funciones de utilidad como `generateListNumbers`, `generatePagination`, `getAirportById`, y `notify`.

#### 6. **`services`**

Contiene servicios que interactúan con APIs u otras fuentes externas.

- **`fetchAirports`**: Servicio para obtener información sobre aeropuertos.

#### 7. **`store`**

Contiene el estado centralizado de la aplicación usando una gestión de estado.

- **`useAirportStore`**: Hook para gestionar el estado relacionado con aeropuertos.

### Archivos de configuración

- **`tsconfig.json`**: Configuración de TypeScript.

## Estructura del árbol de directorios

```
sky-connect-explorer
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── airports
│   │   │   ├── [id]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── assets
│   │   ├── bg.jpg
│   │   └── card-avatar.jpg
│   ├── components
│   │   ├── atoms
│   │   │   ├── AppTitle
│   │   │   │   ├── AppTitle.spec.tsx
│   │   │   │   ├── AppTitle.tsx
│   │   │   │   └── index.ts
│   │   │   ├── ClientSideToastContainer
│   │   │   │   ├── ClientSideToastContainer.spec.tsx
│   │   │   │   ├── ClientSideToastContainer.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Loading
│   │   │   │   ├── Api.spec.tsx
│   │   │   │   └── Api.tsx
│   │   │   ├── NoData
│   │   │   │   ├── NoData.spec.tsx
│   │   │   │   ├── NoData.tsx
│   │   │   │   └── index.ts
│   │   │   └── icons
│   │   │       ├── Airport.tsx
│   │   │       ├── Info.tsx
│   │   │       ├── Location.tsx
│   │   │       ├── NoData.tsx
│   │   │       ├── Search.tsx
│   │   │       ├── Time.tsx
│   │   │       ├── Zone.tsx
│   │   │       └── index.ts
│   │   ├── molecules
│   │   │   ├── Clock
│   │   │   │   ├── Clock.spec.tsx
│   │   │   │   ├── Clock.tsx
│   │   │   │   └── index.ts
│   │   │   ├── FloatingHomeButton
│   │   │   │   ├── FloatingHomeButton.spec.tsx
│   │   │   │   ├── FloatingHomeButton.tsx
│   │   │   │   └── index.ts
│   │   │   ├── MapTooltip
│   │   │   │   ├── MapTooltip.spec.tsx
│   │   │   │   ├── MapTooltip.tsx
│   │   │   │   └── index.ts
│   │   │   ├── TablePagination
│   │   │   │   ├── TablePagination.spec.tsx
│   │   │   │   ├── TablePagination.tsx
│   │   │   │   └── index.ts
│   │   │   └── cards
│   │   │       ├── Airport
│   │   │       │   ├── Airport.spec.tsx
│   │   │       │   ├── Airport.tsx
│   │   │       │   └── index.ts
│   │   │       ├── AirportInfo
│   │   │       │   ├── AirportInfo.spec.tsx
│   │   │       │   ├── AirportInfo.tsx
│   │   │       │   └── index.ts
│   │   │       ├── Base
│   │   │       │   ├── BaseCard.spec.tsx
│   │   │       │   ├── BaseCard.tsx
│   │   │       │   └── index.ts
│   │   │       ├── LocalTime
│   │   │       │   ├── LocalTime.spec.tsx
│   │   │       │   ├── LocalTime.tsx
│   │   │       │   └── index.ts
│   │   │       ├── LocationInfo
│   │   │       │   ├── LocationInfo.spec.tsx
│   │   │       │   ├── LocationInfo.tsx
│   │   │       │   └── index.ts
│   │   │       └── TimezoneInfo
│   │   │           ├── TimezoneInfo.spec.tsx
│   │   │           ├── TimezoneInfo.tsx
│   │   │           └── index.ts
│   │   ├── organisms
│   │   │   ├── AppHeader
│   │   │   │   ├── AppHeader.spec.tsx
│   │   │   │   ├── AppHeader.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Map
│   │   │   │   ├── Map.spec.tsx
│   │   │   │   ├── Map.tsx
│   │   │   │   └── index.ts
│   │   │   └── SearchBar
│   │   │       ├── SearchBar.spec.tsx
│   │   │       ├── SearchBar.tsx
│   │   │       └── index.ts
│   │   └── templates
│   │       ├── Home
│   │       │   ├── Home.spec.tsx
│   │       │   ├── Home.tsx
│   │       │   └── index.ts
│   │       └── Tabs
│   │           ├── Tabs.spec.tsx
│   │           ├── Tabs.tsx
│   │           └── index.ts
│   ├── hooks
│   │   ├── useInfoWindow.spec.tsx
│   │   └── useInfoWindow.tsx
│   ├── lib
│   │   ├── constants
│   │   │   ├── __test__
│   │   │   │   ├── api.spec.ts
│   │   │   │   └── map.spec.ts
│   │   │   ├── api.ts
│   │   │   └── map.ts
│   │   └── utils
│   │       ├── __test__
│   │       │   ├── generateListNumbers.spec.ts
│   │       │   ├── generatePagination.spec.ts
│   │       │   ├── getAirportById.spec.ts
│   │       │   └── notify.spec.ts
│   │       ├── generateListNumbers.ts
│   │       ├── generatePagination.ts
│   │       ├── getAirportById.ts
│   │       └── notify.ts
│   ├── services
│   │   ├── fetchAirports.spec.ts
│   │   └── fetchAirports.ts
│   └── store
│       ├── useAirportStore.spec.ts
│       └── useAirportStore.ts
├── tsconfig.json
├── README.md
├── eslint.config.mjs
├── jest.config.ts
├── jest.setup.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
└── postcss.config.mjs
```

# Configuración de Variables de Entorno

Para configurar correctamente el proyecto, necesitas crear un archivo `.env` en la raíz del proyecto y agregar las siguientes variables de entorno:

1. Crea un archivo llamado `.env` en la raíz del proyecto si no existe.
2. Agrega las siguientes líneas al archivo `.env`:

```env
  NEXT_PUBLIC_AVIATIONSTACK_API_KEY=Your_API_KEY

  NEXT_PUBLIC_AVIATIONSTACK_BASE_URL=http://api.aviationstack.com/v1/airports

  NEXT_PUBLIC_GOOGLE_MAP_API_KEY=Your_API_KEY
```

3. Reemplaza los valores `Your_API_KEY` con tus claves de API reales.

Estas variables de entorno son necesarias para interactuar con los servicios de **AviationStack** y **Google Maps**.

# Instalación de Dependencias

Este proyecto soporta múltiples gestores de paquetes. A continuación, se detallan los pasos para instalar las dependencias con **npm**, **yarn**, **pnpm** y **bun**.

## Usando **npm**

1. Asegúrate de tener **npm** instalado. Si no lo tienes, instala [Node.js](https://nodejs.org/), que incluye **npm**.
2. Abre tu terminal y navega a la raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   npm install
   ```

## Usando **yarn**

1. Asegúrate de tener **yarn** instalado. Si no lo tienes, instala **yarn** con el siguiente comando:

   ```bash
   npm install --global yarn
   ```

2. Navega a la raíz del proyecto en tu terminal.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   yarn install
   ```

## Usando **pnpm**

1. Asegúrate de tener **pnpm** instalado. Si no lo tienes, instala **pnpm** con el siguiente comando:

   ```bash
   npm install -g pnpm
   ```

2. Navega a la raíz del proyecto en tu terminal.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   pnpm install
   ```

## Usando **bun**

1. Asegúrate de tener **bun** instalado. Si no lo tienes, instala **bun** con el siguiente comando:

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. Navega a la raíz del proyecto en tu terminal.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   bun install
   ```

# Proyecto de Next.js

Este es un proyecto de [Next.js](https://nextjs.org) inicializado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

### Explicación de los scripts

- **`dev`**: Ejecuta el servidor de desarrollo de Next.js con **Turbopack** (para una experiencia de desarrollo más rápida y optimizada).

  ```bash
  next dev --turbopack
  ```

- **`build`**: Compila y optimiza el proyecto para producción.

  ```bash
  next build
  ```

- **`start`**: Inicia la aplicación en modo producción después de haber realizado el build.

  ```bash
  next start
  ```

- **`lint`**: Ejecuta ESLint para analizar y detectar posibles problemas en el código.

  ```bash
  next lint
  ```

- **`format`**: Ejecuta Prettier para formatear todo el código en el proyecto según las reglas definidas.

  ```bash
  prettier --write .
  ```

- **`test`**: Ejecuta Jest para realizar pruebas unitarias, limpia la caché de Jest y elimina cualquier archivo de cobertura anterior.

  ```bash
  jest --clearCache & rm -rf coverage & jest
  ```

- **`test:watch`**: Ejecuta Jest en modo de observación para que las pruebas se ejecuten automáticamente al modificar los archivos.
  ```bash
  jest --watch
  ```

Abra [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.

Puedes empezar a editar la página modificando `app/page.tsx`. La página se actualiza automáticamente a medida que editas el archivo.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para optimizar y cargar automáticamente [Geist](https://vercel.com/font), una nueva familia tipográfica para Vercel.

## Más información

Para saber más sobre Next.js, echa un vistazo a los siguientes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - conoce las características y la API de Next.js.
- Learn Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

Puedes consultar [el repositorio GitHub de Next.js](https://github.com/vercel/next.js) - ¡tus comentarios y contribuciones son bienvenidos!

## Despliegue en Vercel

La forma más sencilla de desplegar tu aplicación Next.js es utilizar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Echa un vistazo a nuestra [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

Traducción realizada con la versión gratuita del traductor DeepL.com
