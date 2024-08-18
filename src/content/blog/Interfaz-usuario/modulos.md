---
title: Módulos
date: 2024-08-07
description: Los módulos se dividen en globales (librerías agrupadas por contexto) y submódulos (específicos para desarrollo de la aplicación). Cada módulo debe ser independiente y encapsulado, aunque puede ser reutilizado en otros contextos.
tags: ["Interfaz Usuario"]
---


# Módulos

Se deben distinguir dos tipos de módulos:

1. **Módulos Globales**: 
   Ya mencionados anteriormente como `dpj-modules-XXX`, son librerías de módulos agrupados por contexto.

2. **Submódulos**: 
   Dentro de un propio módulo, se definen los submódulos específicos para el desarrollo de la aplicación. Se puede generalizar diciendo que cada ítem de menú de la aplicación `dpj-plandir` tendrá asociado un módulo definido en esta sección. Aquí se encontrará el gran volumen de desarrollo del proyecto. Dentro de cada módulo se definirán todos los elementos necesarios y que sean propios del contexto del desarrollo. 

   Cada módulo debe considerarse como algo independiente, con un nivel de abstracción total y aislamiento del resto, como si de una caja negra se tratase. No obstante, siempre se puede usar dicho módulo en cualquier otro módulo, librería o aplicación.
