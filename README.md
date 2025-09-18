# 🗺️ Gestor de Marcadores Interactivo

Una aplicación web moderna desarrollada con **Svelte 5** y **TypeScript** que permite gestionar marcadores geográficos de forma interactiva con mapas en tiempo real.

## ✨ Características

### 🎯 Funcionalidades Principales
- **Visualización de mapas interactivos** con MapLibre GL
- **Gestión completa de marcadores**: crear, visualizar y eliminar
- **Interfaz intuitiva** con sidebar colapsable
- **Miniaturas de mapas** para cada marcador usando OpenStreetMap
- **Validación de nombres únicos** para evitar duplicados
- **Animaciones suaves** con transiciones CSS avanzadas

### 🛠️ Tecnologías
- **Frontend**: Svelte 5 con las nuevas APIs de estado (`$state`, `$props`, `$effect`)
- **Lenguaje**: TypeScript para tipado seguro
- **Mapas**: MapLibre GL (alternativa open-source a Mapbox)
- **Iconografía**: Lucide Icons para una UI moderna
- **Estilos**: CSS nativo con Stylelint para calidad de código
- **Tipografía**: Google Fonts (Inter) integrada con Fontsource
- **Build**: Vite para desarrollo rápido y builds optimizados

### 🎨 Arquitectura de Componentes
```
src/
├── App.svelte          # Componente principal con gestión de estado
├── lib/
│   ├── Map.svelte      # Mapa interactivo con MapLibre GL
│   ├── Menu.svelte     # Lista de marcadores
│   ├── MarkerCard.svelte # Tarjeta individual de marcador con miniatura
│   └── AlertBanner.svelte # Componente de estado vacío
└── types/
    └── MarkerItem.ts   # Tipado TypeScript para marcadores
```

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd sv-test

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo (puerto 8080)
npm run build        # Build de producción
npm run preview      # Vista previa del build
npm run check        # Verificación de tipos TypeScript
npm run lint:css     # Linting de CSS y estilos
npm run lint:css:fix # Auto-fix de problemas de CSS
```

## 🎮 Cómo Usar

### Gestión de Marcadores
1. **Visualizar marcadores**: La aplicación incluye marcadores predefinidos de ciudades españolas
2. **Agregar marcadores**: Haz clic en cualquier punto del mapa
3. **Nombrar marcadores**: Se te pedirá un nombre único para cada nuevo marcador
4. **Eliminar marcadores**: Usa el botón de papelera en cada tarjeta del sidebar

### Interfaz
- **Toggle del sidebar**: Botón circular en la esquina superior izquierda
- **Navegación del mapa**: Zoom, pan y exploración completa
- **Popups informativos**: Haz clic en cualquier marcador para ver su información

## 🏗️ Arquitectura Técnica

### Gestión de Estado
- **Estado reactivo** con `$state()` de Svelte 5
- **Props tipadas** con `$props<T>()`
- **Efectos reactivos** con `$effect()` para sincronización mapa-lista

### Comunicación Entre Componentes
```typescript
// Flujo de datos unidireccional
App.svelte (estado) → Map.svelte (visualización)
                   → Menu.svelte → MarkerCard.svelte

// Comunicación hacia arriba mediante callbacks
MarkerCard → Menu → App (para eliminación)
Map → App (para creación)
```

### Optimizaciones
- **Transiciones suaves** con `cubic-bezier` personalizado
- **Lazy loading** de imágenes de mapas
- **Gestión eficiente de marcadores** con cleanup automático
- **CSS ordenado** automáticamente por grupos lógicos

## 📁 Estructura del Proyecto

```
sv-test/
├── public/             # Archivos estáticos
├── src/
│   ├── lib/           # Componentes reutilizables
│   ├── types/         # Definiciones TypeScript
│   ├── app.css        # Estilos globales
│   ├── main.ts        # Punto de entrada
│   └── App.svelte     # Componente raíz
├── .stylelintrc.json  # Configuración de linting CSS
├── vite.config.ts     # Configuración de Vite
└── package.json       # Dependencias y scripts
```

## 🔧 Configuración de Desarrollo

### Linting CSS
El proyecto incluye **Stylelint** configurado con:
- Reglas estándar de CSS
- Ordenamiento automático de propiedades por grupos lógicos
- Soporte para archivos `.svelte`
- Auto-fix de problemas comunes

### TypeScript
- Configuración estricta para máxima seguridad de tipos
- Soporte completo para Svelte 5
- Verificación de tipos en archivos `.svelte`

## 🌍 Datos de Muestra

La aplicación incluye marcadores predefinidos de las principales ciudades españolas:
- Alicante, Madrid, Barcelona, Valencia, Sevilla
- Zaragoza, Málaga, Murcia, Palma, Las Palmas

## 📄 Licencia

Proyecto de prueba desarrollado para explorar las capacidades de Svelte 5 y tecnologías de mapas modernas.

---

*Desarrollado con ❤️ usando Svelte 5, TypeScript y MapLibre GL*
