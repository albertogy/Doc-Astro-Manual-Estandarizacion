---
title: Modelos
date: 2024-08-07
description: Los modelos deben ser interfaces y usar tipos en lugar de enumeraciones cuando sea posible.
tags: ["Interfaz Usuario"]
---


# Modelos

Las estructuras de datos deben implementarse como **interfaces** en lugar de clases, siempre que sea posible. Asimismo, siempre que sea viable, se debe evitar la creación de enumeraciones, utilizando en su lugar **tipos**. Por ejemplo:

```typescript
export type TipoValidez = "COPIA" | "COPIA COMPULSADA" | "COPIA ORIGINAL" | "ORIGINAL";
