---
title: Componentes
date: 2024-08-08
description: Los componentes se dividen en base y específicos, deben heredar del componente universal, utilizar estrategias de detección de cambios eficientes, y proporcionar ayuda al usuario a través de etiquetas, tooltips y placeholders.
tags: ["Interfaz Usuario"]
---


# Componentes

Antes de crear un nuevo componente, es importante diferenciar si será un componente base o un componente con cierta funcionalidad específica. 

- **Componentes base**: Se crearán dentro del directorio `dpj-core/src/lib/components/ui`, indicando que será de interfaz de usuario. Ejemplos incluyen botones, tablas, formularios, etc.
- **Componentes con funcionalidad específica**: Se crearán dentro de `dpj-core/src/lib/components/shared`. Ejemplos incluyen buscadores de terceros, DNI, direcciones, etc.

## Herencia y Control de Valor
- Todos los componentes deben heredar del componente universal.
- Si se trata de un componente de entrada de datos (input, combo, checkbox, etc.) que se usará dentro de formularios reactivos, **se debe implementar obligatoriamente la interfaz `ControlValueAccessor` de Angular**.

## Estrategia de Detección de Cambios
- Angular utiliza la estrategia de detección de cambios por defecto `Default`, que recarga la vista con cualquier cambio detectado.
- Para mejorar el rendimiento, **se debe usar la estrategia `OnPush`**, que no escucha cambios constantemente. 
- En casos donde sea necesario forzar el refresco de la vista, se debe utilizar `ChangeDetectorRef`.

## Ayuda al Usuario Final
Los componentes deben proporcionar ayuda al usuario final de tres maneras posibles:
1. **Label o etiqueta**: Descripción corta del componente.
2. **Tooltip**: Descripción larga que se muestra al pasar el ratón sobre el componente.
3. **Placeholder**: Sugerencia del tipo de dato esperado.

De manera excepcional, algunos componentes pueden mostrar un **icono representativo** del tipo de componente (teléfono, calendario, matrícula, moneda, etc.).

## Definición y Exportación de Componentes
- Todos los componentes se definen como un módulo para poder importar y exportar todo lo necesario para dicho componente.
- Además, se debe incluir un archivo `index.ts` para publicar el componente.

## Manejo de Valores Numéricos
- En los campos de formulario de tipo `input` o aquellos donde el valor a mostrar sea un dato numérico, cuando el usuario no introduzca un valor, este será **cero (0)**.
- Si el valor a mostrar es **cero (0)**, no se mostrará ningún valor.
- En caso de que el campo recoja un importe, se mostrará el valor formateado de acuerdo con el formato definido para importes (e.g., **0,00**).
