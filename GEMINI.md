# Neurocubo Documentación

## Concepto del Proyecto

En primer lugar, respecto al diseño del prototipo, se logró crear un prototipo que es tanto intuitiva como accesible. Esta interfaz incluye contenido interactivo, se adapta al ritmo de aprendizaje de los niños y permite un seguimiento del progreso, aspectos que fueron muy valorados por los docentes y padres que participaron en la encuesta.
Asimismo, se identificaron los elementos clave que pueden potenciar las habilidades comunicativas en preescolares con autismo. Entre ellos, la ampliación del vocabulario y el fortalecimiento de la comprensión que fueron considerados los más relevantes. Además, se destacó de manera positiva la opinión de los padres y maestros, quienes coincidieron que el apoyo de un adulto o un guía son esenciales para que la aplicación se implemente con éxito en el ámbito educativo y familiar.
Como recomendación metodológica para futuras investigaciones, se sugiere obtener una comprensión más profunda de las experiencias para entender mejor lo que piensan, sienten y necesitan los usuarios (padres, maestros, niños). Además, expandir la muestra y adicionar su efectividad en entornos educativos, validarían su eficacia.

## Estructura del Proyecto

El proyecto está construido con Next.js y TypeScript, siguiendo una estructura moderna de aplicaciones web.

```
/comutea
├── .gitignore            # Archivos ignorados por Git
├── next.config.ts        # Configuración de Next.js
├── package.json          # Dependencias y scripts del proyecto
├── tsconfig.json         # Configuración de TypeScript
├── public/               # Archivos estáticos
│   ├── img/              # Imágenes de la aplicación
    │   ├── games/        # Imágenes de los juegos
│   └── *.svg             # Iconos y otros gráficos vectoriales
└── src/                  # Código fuente de la aplicación
    ├── app/              # Rutas y páginas de la aplicación (App Router)
    │   ├── layout.tsx    # Layout principal que envuelve la aplicación
    │   ├── page.tsx      # Página de inicio (landing page)
    │   ├── configuracion/  # Página de configuración
    │   ├── game/        # Lógica del juego
    │   │   └── vocabulario/  # Ruta dinámica para diferentes niveles o modos de juego
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

    -   La ruta `/login` sugiere una página dedicada para que los usuarios inicien sesión.

2.  **Configuración:**

    -   La página `/configuracion` permite a los usuarios ajustar parámetros de la aplicación o de su perfil.

3.  **Reportes y Estadísticas:**

    -   La ruta `/reportes` está destinada a mostrar datos sobre el rendimiento del usuario, estadísticas de juego u otra información relevante.

4.  **Componentes Reutilizables:**
    -   El uso de un directorio `components` (ej. `Header.tsx`) demuestra una arquitectura modular y reutilizable.
