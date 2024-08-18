---
title: Comportamiento botones en el formulario
date: 2024-08-07
description: Comportamiento y las reglas de habilitación, visibilidad, y acciones de los botones 'Aceptar', 'Cancelar' y 'Limpiar' en formularios, según los modos de operación como alta, consulta, modificación y borrado.
tags: ["Interfaz Usuario"]
---

# Comportamiento de Botones en Formularios

Descripción detallada del comportamiento esperado de los botones "Aceptar", "Cancelar" y "Limpiar" en los diferentes modos de operación de un formulario, incluyendo reglas de habilitación, visibilidad, y las acciones que se deben realizar en cada caso.

## Aceptar, Cancelar y Limpiar en los diferentes modos de formulario

| Acción       | Estado Aceptar                                              | Estado Cancelar                  | Estado Limpiar               | Aceptar                                                              | Cancelar                              | Limpiar                    |
|--------------|-------------------------------------------------------------|----------------------------------|------------------------------|---------------------------------------------------------------------|---------------------------------------|----------------------------|
| **Alta**     | Deshabilitado hasta que se pasen las validaciones            | Siempre habilitado               | Visible y habilitado          | NO mostrar mensaje de confirmación antes de realizar la inserción. Excepto validaciones. | Regresa al listado sin pedir confirmación | Limpia los campos habilitados. |
| **Consulta** | Siempre habilitado                                          | Siempre deshabilitado            | Visible y deshabilitado       | Vuelve al listado sin pedir confirmación                              | N/A                                   | N/A                        |
| **Modificación** | Deshabilitado hasta que se detecta cambio y pasa todas las validaciones | Siempre habilitado               | Visible y habilitado, sólo limpia los campos habilitados. | NO mostrar mensaje de confirmación antes de realizar la actualización | Regresa al listado sin pedir confirmación | Limpia los campos habilitados. |
| **Borrado**  | Siempre habilitado                                          | Siempre habilitado               | Visible y deshabilitado       | Mostrar mensaje de confirmación antes de realizar el borrado        | Regresa al listado sin pedir confirmación | N/A                        |