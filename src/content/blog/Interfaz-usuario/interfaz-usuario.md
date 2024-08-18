---
title: Interfaz de Usuario
date: 2024-08-09
description: Los módulos Angular se organizan en directorios estructurados por componentes, modelos, servicios, y rutas, con opción a subdividir en áreas funcionales y directorios adicionales según la complejidad.
tags: ["módulos"]
---


# Interfaz de usuario (Angular)

Los módulos definidos como librerías Angular (`dpj-modules-XXXX`) se corresponderán con las agrupaciones de módulos definidos al inicio de este documento y contendrán a los módulos, cada uno en un directorio con el nombre de dicho módulo secundario y la siguiente estructura:



- `/components/`
- `/models/`
- `/modules/`
- `/pages/`
- `/pipes/`
- `/services/`
- `/module.ts`
- `/routes.ts`
- `/index.ts`


Cuando un módulo contenga un gran número de componentes, páginas, servicios, etc., podremos optar por agrupar los mismos en distintas áreas funcionales. Ejemplo:


- `/comunica`
  - `/models`
  - `/pages`
  - `/services`

- `/registro-entrada`
  - `/models`
  - `/pages`
  - `/services`

- `/registro-salida`
  - `/models`
  - `/pages`
  - `/services`

- `/sir`
  - `/components`
  - `/models`
  - `/pages`
  - `/services`


Cuando la complejidad del módulo en sí sea alta, se agrupará la funcionalidad dentro del mismo en un nuevo directorio `modules`.  
 Para la agrupación de módulos se seguirá una estrategia con enfoque funcional, en la que el modelo de datos y todo lo relacionado con un desarrollo estará ubicado dentro del directorio del propio módulo.
