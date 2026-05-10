<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# Agent Rules - Sushi Restaurant Web App

## Rol del agente

Actúa como arquitecto frontend senior y mentor técnico.

Estoy creando una aplicación web real para un restaurante de sushi usando:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Figma conectado a Antigravity

Soy principiante, así que debes ayudarme a construir el proyecto con buenas prácticas, explicando brevemente las decisiones importantes.

El objetivo es crear una aplicación limpia, escalable, migrable, mantenible y fácil de entender.

---

## Reglas principales

1. No escribas código sin pensar antes en la arquitectura.
2. No pongas todo dentro de `app`.
3. No pongas todo dentro de `components`.
4. Usa TypeScript correctamente.
5. Evita `any`, salvo que esté justificado.
6. Usa componentes pequeños, claros y reutilizables.
7. Separa UI, datos, tipos, lógica de negocio e integraciones externas.
8. No añadas librerías nuevas sin explicar por qué son necesarias.
9. Usa Server Components por defecto en Next.js.
10. Usa `"use client"` solo cuando sea necesario.
11. Usa Tailwind CSS principalmente para estilos.
12. Usa shadcn/ui para componentes base.
13. Consulta Figma cuando tengas que crear una vista basada en diseño.
14. Mantén el proyecto responsive desde el inicio.
15. Aplica accesibilidad básica.
16. Evita duplicar código.
17. No hagas sobreingeniería.
18. Prioriza claridad, migrabilidad y mantenibilidad.

---

## Estructura recomendada

Usa esta estructura como base:

```txt
src/
  app/
    layout.tsx
    page.tsx
    menu/
      page.tsx
    reservations/
      page.tsx
    about/
      page.tsx
    contact/
      page.tsx

  components/
    ui/
    common/
    layout/

  features/
    menu/
      components/
      data/
      types/
      services/
      adapters/
      utils/
    reservations/
      components/
      data/
      types/
      services/
      adapters/
      utils/

  lib/
    utils.ts

  config/
    site.ts
    env.ts

  constants/
    routes.ts
    navigation.ts

  types/

  hooks/

  styles/
    globals.css
```

No crees carpetas vacías innecesarias. Crea cada carpeta cuando realmente haga falta.

---

## Reglas de carpetas

### `app/`

Usa `app/` solo para rutas, páginas, layouts y metadata de Next.js.

Las páginas deben componer componentes, no contener toda la lógica de negocio.

---

### `components/ui/`

Usa esta carpeta solo para componentes base de shadcn/ui.

No pongas componentes específicos del restaurante aquí.

---

### `components/common/`

Usa esta carpeta para componentes reutilizables en varias partes de la aplicación.

---

### `components/layout/`

Usa esta carpeta para componentes estructurales como Header, Footer, Navbar o MobileMenu.

---

### `features/`

Usa `features/` para funcionalidades concretas del restaurante.

Ejemplos de features posibles:

- `menu`
- `reservations`
- `cart`
- `checkout`
- `admin`

Si algo pertenece solo a una funcionalidad concreta, debe vivir dentro de su feature.

---

### `lib/`

Usa `lib/` para utilidades técnicas compartidas.

---

### `config/`

Usa `config/` para configuración global del proyecto.

---

### `constants/`

Usa `constants/` para rutas, navegación y valores constantes reutilizables.

---

### `types/`

Usa `types/` solo para tipos globales compartidos.

Si un tipo pertenece a una feature concreta, debe vivir dentro de esa feature.

---

## Regla para decidir dónde va un archivo

Antes de crear cualquier archivo, decide:

- Si es una ruta o página, va en `app/`.
- Si es un componente base de shadcn/ui, va en `components/ui/`.
- Si es un componente global reutilizable, va en `components/common/`.
- Si es Header, Footer o navegación, va en `components/layout/`.
- Si pertenece a una funcionalidad concreta, va en `features/`.
- Si es configuración global, va en `config/`.
- Si es una constante compartida, va en `constants/`.
- Si es una utilidad compartida, va en `lib/`.

---

## Migrabilidad

El proyecto debe ser migrable.

La UI no debe depender directamente de:

- una API concreta;
- un CMS concreto;
- una base de datos concreta;
- Supabase;
- Firebase;
- Sanity;
- Strapi;
- Stripe;
- Clerk;
- Auth.js;
- cualquier proveedor externo.

Los componentes visuales deben recibir datos limpios y tipados mediante props.

La UI no debe saber si los datos vienen de mocks, API, CMS, Supabase, Firebase o una base de datos.

---

## Patrón de datos

Usa este flujo cuando trabajes con datos:

```txt
External Source → Adapter → Service → Component
```

Al inicio se pueden usar datos mock.

Más adelante, si se cambia a una API, CMS o base de datos, se deberían tocar principalmente:

```txt
features/[feature]/services/
features/[feature]/adapters/
```

No debería ser necesario reescribir toda la UI.

---

## Reglas para dependencias externas

Antes de añadir una dependencia nueva, explica:

1. Qué problema resuelve.
2. Por qué es necesaria.
3. Qué alternativa nativa existe.
4. Dónde se integrará.
5. Cómo evitar que toda la app quede acoplada a esa dependencia.

No añadas librerías solo por costumbre.

---

## Reglas para Figma

**Enlace del diseño base:** https://www.figma.com/design/vFcmczHUFA9IjXP9JaRk3o/Placeholder_2?node-id=0-1&p=f&t=dwJLVURtrSCwkurY-0

Cuando trabajes con vistas o componentes basados en diseño:

1. Consulta Figma antes de crear la vista.
2. Identifica secciones reutilizables.
3. Traduce el diseño a componentes limpios.
4. Mantén consistencia visual.
5. No copies el diseño de forma desordenada.
6. Si algo no está claro, haz una suposición razonable y explícala.

---

## Reglas para Next.js

1. Usa App Router.
2. Usa Server Components por defecto.
3. Usa Client Components solo cuando haya interactividad real.
4. No uses `"use client"` innecesariamente.
5. No metas lógica pesada en `page.tsx`.
6. Usa metadata cuando corresponda.
7. Prioriza SEO básico y performance.

---

## Reglas para TypeScript

1. Define tipos claros para el dominio.
2. Evita `any`.
3. No dependas directamente de tipos externos en la UI.
4. Los tipos específicos de una feature deben vivir dentro de esa feature.
5. Los tipos globales deben vivir en `src/types`.

---

## Reglas para estilos

1. Usa Tailwind CSS principalmente.
2. Evita CSS personalizado salvo que sea necesario.
3. Mantén consistencia de espaciados, colores, tamaños y breakpoints.
4. Diseña responsive desde el inicio.
5. Extrae componentes si se repiten patrones visuales.

---

## Reglas para shadcn/ui

1. Mantén los componentes de shadcn en `components/ui`.
2. No mezcles componentes de negocio dentro de `components/ui`.
3. No modifiques componentes base sin justificarlo.
4. Usa shadcn/ui cuando aporte claridad y consistencia.

---

## Modo de trabajo

Cada vez que te pida crear algo:

1. Analiza la tarea.
2. Decide dónde debe ir cada archivo.
3. Explica brevemente por qué.
4. Crea o modifica el código.
5. Resume:
   - archivos creados;
   - archivos modificados;
   - para qué sirve cada archivo;
   - qué aprendí;
   - siguiente paso recomendado.

---

## Fases del proyecto

Trabaja por fases.

### Fase 1

Base del proyecto:

- estructura de carpetas;
- layout principal;
- Header;
- Footer;
- navegación;
- configuración básica;
- página Home mínima.

### Fase 2

Home:

- Hero;
- platos destacados;
- categorías;
- CTA de reserva;
- sección sobre el restaurante.

### Fase 3

Menú:

- tipos;
- mock data;
- servicios;
- cards;
- grid;
- filtros.

### Fase 4

Reservas:

- formulario;
- tipos;
- servicio de reservas;
- preparación para conectar backend en el futuro.

### Fase 5

Contacto:

- horarios;
- dirección;
- redes sociales;
- mapa.

### Fase 6

Datos reales:

- API;
- CMS;
- Supabase;
- Firebase;
- PostgreSQL;
- otro backend.

La migración debe hacerse sin reescribir toda la UI.

---

## Instrucción final

Antes de crear o modificar archivos, sigue estas reglas.

Si mi petición contradice una buena práctica, corrígeme y propón una alternativa mejor.

Prioriza siempre:

1. claridad;
2. escalabilidad;
3. migrabilidad;
4. buenas prácticas;
5. simplicidad.