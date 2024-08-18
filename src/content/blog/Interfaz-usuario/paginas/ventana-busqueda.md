---
title: Ventanas de Busqueda
date: 2024-08-07
description: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
tags: ["Interfaz Usuario"]
---

# Ventanas de Búsqueda

Dentro de las ventanas de tipo normal, podemos distinguir de nuevo dos subtipos: `ventanas de búsqueda` y `ventanas de detalle`.

Por lo general, las ventanas de búsqueda tendrán la siguiente estructura:

- **Formulario de Búsqueda** (`dpj-core-busqueda`): Situado en la parte superior de la ventana, contiene los criterios de búsqueda.
- **Tabla de Resultados** (`dpj-core-listbox`): Situada en la parte inferior de la ventana, muestra los resultados de la búsqueda.

### Búsqueda Avanzada

Si el número de condiciones para realizar la búsqueda es elevado, inicialmente se mostrarán las más habituales, mientras que el resto estará disponible a través de la opción de **búsqueda avanzada**.

### Condiciones Especiales

- Si el número de registros a recuperar es inferior a 500, se puede lanzar la búsqueda al entrar en la página y prescindir del formulario de búsqueda.
- Si el formulario de búsqueda incluye la **clave primaria** (o clave compuesta) o un **índice único** de la tabla a consultar, al informar dicho/s campo/s, el formulario limpiará el resto de los criterios. Solo es necesario indicar al formulario cuáles son los campos clave para que gestione este comportamiento.
  <span class="pendiente">Pendiente</span>

### Titulación y Etiquetado

- **Título de la Ventana de Búsqueda**: Debe seguir la estructura "Mantenimiento de ...".
- **Panel de Búsqueda**: El panel que contiene el componente de búsqueda utilizará el valor por defecto "Búsqueda".
- **Fieldset de Criterios**: El `fieldset` que contiene los campos de búsqueda utilizará el valor por defecto "Criterios".

![](/ventanas/82_1.png)

 ### Menu Acciones *tres niveles.* <span class="pendiente">Pendiente</span>

 ### Campos Clave del Formulario <span class="pendiente">Pendiente</span>

 ### Operaciones en la Tabla

Para las operaciones de **alta**, **modificación**, **consulta**, o **borrado** de los registros de la tabla, los botones estarán ubicados de la siguiente manera:

- **Consultar, Modificar, Borrar**: Botones situados en la parte izquierda de cada fila.
- **Alta**: Botón situado en la botonera del componente `window`.

### Condiciones para Operaciones CRUD desde el mismo Listado

- Las operaciones en el registro (consultar, modificar, borrar) se podrán realizar directamente desde el listado solo si la fila muestra todos los campos del registro.
- Si hay datos no visibles en el listado, estas acciones redirigirán al formulario de detalle, donde se completará la acción.

### Navegación al Formulario de Detalle

Al navegar al formulario de detalle, se guardarán los datos del formulario de búsqueda en un array de objetos `IAlmacen`, que se pasará al `RouterOutlet`.

#### Nomenclatura para Almacenar Información

Todas las ventanas que necesiten almacenar información antes de navegar lo harán siguiendo la siguiente nomenclatura:

```typescript
outlet_MODULO_VENTANA_ENTORNO_USUARIOState
```

- **outlet**: Nombre del outlet sobre el que se renderiza la ventana. Importante para la limpieza automática al cierre de la pestaña.
- **MODULO**: Nombre del módulo que contiene la ventana.
- **VENTANA**: Nombre del componente ventana.
- **ENTORNO**: Entorno de ejecución de la aplicación. 
- **USUARIO**: Usuario que está ejecutando la aplicación. 
- **State**: Literal descriptivo que indica que se está almacenando el estado de la ventana.

> Tanto ENTORNO como USUARIO se recuperan de forma conjunta con el StateToken llamado KEY_STORAGE. Ejemplo: 
```typescript
@Inject(KEY_STORAGE) public keyStorage: StateToken 
```

 ### Retorno al Listado desde el Formulario

- Al regresar al listado desde el formulario de **alta**, **modificación**, o **borrado**, tras realizar la operación correspondiente (pulsar el botón "aceptar"), se refrescará el listado en base a las condiciones de búsqueda existentes recuperadas del `RouterOutlet`.
  
- Si el modo es **Consulta**, no se recargará la búsqueda, solo se mostrará el estado que había almacenado.

### Consideraciones Adicionales 

- Para los clientes migrados de FCP, este funcionamiento será automático, pero deberá revisarse.
- En los nuevos desarrollos, este comportamiento debe implementarse manualmente.
