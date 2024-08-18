---
title: Páginas
date: 2024-08-07
description: Estructura y comportamiento de las páginas en Angular, describiendo los tipos de ventanas, la herencia de componentes, y la disposición y funcionalidad de los botones en la interfaz de usuario
tags: ["Interfaz Usuario"]
---


# Páginas

Las páginas en Angular se representan como una ventana (`dpj-core-window`). Todas las ventanas, como componentes, deben heredar del componente universal e implementar el método `validaPermisos`, el cual llamaremos desde el método `ngOnInit` y que, a su vez, llamará al método de `UniversalComponent` `checkAuth()`.

```typescript
validaPermisos(): void { 
    this.checkAuth(); 
}
```

Podemos distinguir dos tipos de ventanas principalmente:
1. **Ventanas normales**: En su código HTML, tendrán como nodo raíz el componente `dpj-core-window`.
2. **Ventanas auxiliares**: Solo mostrarán el segundo nivel de pestañas (subpestañas). En este caso, no se aplicará el nodo `dpj-core-window`, sino el `p-tabview` para mostrar cada subpestaña en un `p-tabPanel`.

En caso de que la ventana necesite usar un nivel más de pestañas, no se usará un `router-outlet` nuevo. En su lugar, se simulará mostrando y ocultando los diferentes componentes de la misma.

La botonera situada en la parte superior, donde encontramos el título de la página, mostrará obligatoriamente los botones en el siguiente orden (de derecha a izquierda):
- **Ayuda** (obligatorio): Solo se mostrará activo si la ventana tiene implementada la opción de ayuda. Icono `dpj-icon-question-circle`.
- **Volver al inicio** (obligatorio): Nos lleva a la ventana anterior de ese outlet. Por defecto, irá al nivel anterior en las migas de pan. Icono `dpj-icon-left`.
- **Acciones** (opcional): Diferentes acciones y detalles de la ventana. Se mostrará un menú contextual que incluirá todos los niveles necesarios. Icono `dpj-icon-ellipsis-h`.
- **Añadir** (opcional): Alta de un nuevo registro para el caso de páginas con listados. Icono `dpj-icon-plus`. Si hay varios mantenimientos, el botón será de tipo SplitButton para mostrar un desplegable con todas las altas posibles.

