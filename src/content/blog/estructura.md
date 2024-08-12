---
title: Estructura global de las aplicaciones y módulos.
date: 2024-08-12
description: Agrupación de componentes en módulos.
---


# Estructura global de las aplicaciones y módulos



&emsp;&emsp;De forma global, se ha establecido una agrupación de los distintos componentes en módulos. En algunos casos, los módulos se han agrupado con motivo únicamente organizativo en supramódulos.

## Agrupación

| Agrupación | Módulo          |
|------------|-----------------|
|            | Arq             |
| MGI        | Comunica        |
| MGI        | Registro Entrada|
| MGI        | Registro Salida |


&emsp;&emsp;Estos módulos podrán llamarse desde más de una aplicación y tendrán como norma principal no depender ni hacer uso directo de otros módulos. 
Cuando necesitemos realizar una operación en otro módulo, acciones previas, validación, acciones en caso de error, acciones en caso de éxito, … en un servicio,  
lo haremos llamando a un endpoint definido en configuración, y para ello deberemos definir la interfaz de los objetos petición y respuesta del servicio del endpoint.

