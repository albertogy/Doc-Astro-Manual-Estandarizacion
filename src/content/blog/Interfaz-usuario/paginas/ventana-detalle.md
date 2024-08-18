---
title: Ventanas de Detalle
date: 2024-08-07
description: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
tags: ["Interfaz Usuario"]
---

# Ventanas de Detalle

Las ventanas de detalle, por regla general, son ventanas que contienen un formulario normal con el detalle de un registro de la ventana de búsqueda anterior.

## Título de la Ventana

- El componente ventana que contiene el formulario mostrará como título la operación que estamos realizando:
  - #### **Consulta de xxxxxxx**
    ![Consulta](/ventanas/consulta_detalle.png)
  - #### **Alta de xxxxxxx**
    ![Alta](/ventanas/alta_detalle.png)
  - #### **Modificación de xxxxxxx**
    ![Modificacion](/ventanas/modificacion_detalle.png)
  - #### **Baja de xxxxxxx**
    ![Baja](/ventanas/baja_detalle.png)
- El panel del formulario mostrará en su título: **"DETALLE DE XXXXXXX"**.

## Configuración Json

Todas las ventanas, ya sean de tipo búsqueda o detalle, y sus respectivos formularios se configurarán con un fichero en formato JSON que se nombrará igual que el componente o página que lo utiliza. Ejemplo:

- `/info-registro-entrada`
- `info-registro-entrada.component.html`
- `info-registro-entrada.component.ts`
- `info-registro-entrada.form.json`

En el componente, crearemos un método `createForm` donde realizaremos la inicialización del formulario:

```typescript
let formulario = require("./info-registro-entrada.form.json");
this.formularioParams = FormularioParams.mapperObject(formulario);
```

Llamaremos al método `createForm` desde el método `ngOnInit` del ciclo de vida del componente, después de invocar al método `validaPermisos()`. Para asignar los valores iniciales del formulario y recuperar los valores desde el formulario, crearemos los métodos `fillForm` y `fillData`, respectivamente. El método `fillForm` será llamado desde el método `ngAfterViewInit` para inicializar el formulario.

## Botón Añadir

Al posicionarse el cursor sobre el botón, se debe mostrar un tooltip con el texto “Alta/Nuevo/Añadir”. **(Nota: Unificar criterio)**.

## Botón información ampliada

Al navegar entre pestañas, es necesario mostrar los datos con los que se está trabajando en la barra, mostrando el detalle ampliado. Todas las ventanas tienen las propiedades `detailHeader`, `detailSubheader`, `detailContent`, y `detailFooter`, que hacen referencia a la información ampliada.

![Informacion ampliada](/ventanas/info_ampliada.png)


## Mensajes Informativos

Aplicar siempre los tipos de mensajes comunes del fichero `messages` para unificar texto, iconos, colores, título, etc. Para evitar mensajes duplicados en cada mantenimiento y para facilitar posibles cambios futuros, se debe utilizar siempre los mensajes existentes en `features/messages` de `dpj-core`. Si no hay ningún mensaje que se adapte a las necesidades, se definirá el texto, tipo y título del mensaje en el fichero común mencionado anteriormente para que pueda ser reutilizado.

## Fechas Desde-Hasta

Incluir siempre los campos en un `fieldset`, que llevará el nombre del campo principal y dentro, los campos "Desde" y "Hasta". Por ejemplo, los campos "fecha de solicitud inicio" y "fecha de solicitud fin" estarán dentro de un `fieldset` llamado "Solicitud", el cual contendrá dos inputs de tipo fecha, llamados "Desde" y "Hasta", respectivamente.

