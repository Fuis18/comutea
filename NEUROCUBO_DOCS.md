# Neurocubo Documentación

## Concepto del Proyecto

Neurocubo es una aplicación web interactiva diseñada como un juego o herramienta de entrenamiento cognitivo. Basado en la estructura de archivos, el nombre "Neurocubo" sugiere una interfaz centrada en un "cubo" que podría estar relacionada con la neurociencia o la estimulación cerebral.

Los usuarios pueden registrarse o iniciar sesión, interactuar con el juego principal, ajustar configuraciones y ver reportes de su progreso o actividad.

## Estructura del Proyecto

El proyecto está construido con Next.js y TypeScript, siguiendo una estructura moderna de aplicaciones web.

```
/neurocubo-main
├── .gitignore            # Archivos ignorados por Git
├── next.config.ts        # Configuración de Next.js
├── package.json          # Dependencias y scripts del proyecto
├── tsconfig.json         # Configuración de TypeScript
├── public/               # Archivos estáticos
│   ├── imgs/             # Imágenes de la aplicación (cubo-1.png, etc.)
│   └── *.svg             # Iconos y otros gráficos vectoriales
└── src/                  # Código fuente de la aplicación
    ├── app/              # Rutas y páginas de la aplicación (App Router)
    │   ├── layout.tsx    # Layout principal que envuelve la aplicación
    │   ├── page.tsx      # Página de inicio (landing page)
    │   ├── configuracion/  # Página de configuración
    │   ├── juego/        # Lógica del juego
    │   │   └── [param]/  # Ruta dinámica para diferentes niveles o modos de juego
    │   │       └── page.tsx
    │   ├── login/        # Página de inicio de sesión
    │   └── reportes/     # Página para visualizar reportes
    ├── components/         # Componentes reutilizables de React
    │   └── Header.tsx    # Componente de cabecera
    └── data/               # Archivos de datos
        └── bigdata.ts    # Posiblemente datos estáticos o de configuración para el juego
```

## Funcionalidades Principales

1.  **Autenticación de Usuarios:**
    *   La ruta `/login` sugiere una página dedicada para que los usuarios inicien sesión.

2.  **Juego Interactivo:**
    *   La ruta `/juego/[param]` indica una funcionalidad de juego principal.
    *   El parámetro dinámico `[param]` podría usarse para cargar diferentes niveles, modos de juego o sesiones de usuario.

3.  **Configuración:**
    *   La página `/configuracion` permite a los usuarios ajustar parámetros de la aplicación o de su perfil.

4.  **Reportes y Estadísticas:**
    *   La ruta `/reportes` está destinada a mostrar datos sobre el rendimiento del usuario, estadísticas de juego u otra información relevante.

5.  **Componentes Reutilizables:**
    *   El uso de un directorio `components` (ej. `Header.tsx`) demuestra una arquitectura modular y reutilizable.
