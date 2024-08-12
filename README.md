# Manual de Estandarización del Plan Director

Este repositorio contiene la documentación y guías necesarias para la estandarización de aplicaciones, bases de datos y servicios REST dentro del proyecto del Plan Director. Aquí se definen las estructuras, convenciones y buenas prácticas que deben seguirse para asegurar la consistencia y calidad en el desarrollo de los diferentes módulos del proyecto.

## Contenido

### 1. Estructura Global de Aplicaciones y Módulos
Este documento detalla la agrupación y organización de los diferentes componentes en módulos y supramódulos. Se establecen las normas generales para la independencia de los módulos y cómo interactúan entre sí mediante servicios definidos por endpoints.

### 2. Base de Datos
Se describen las convenciones para la creación de esquemas y tablas en la base de datos. Incluye:
- **Nomenclatura de Tablas**: Formato estándar para el nombre de tablas, uso de minúsculas y separación de palabras con guiones bajos.
- **Columnas**: Convenciones para la nomenclatura de diferentes tipos de columnas como claves primarias, claves externas, códigos, descripciones, fechas, números, importes, indicadores booleanos, blobs, JSON, XML, y auditoría.
- **Bloqueo a Nivel de Filas**: Recomendaciones para manejar tablas con muchas operaciones de inserción, actualización y eliminación.
- **Manejo de Borrados Lógicos**: Uso de campos indicadores de activo para manejar borrados lógicos.

### 3. Servicios REST
Este documento describe la estructura y organización de los servicios REST, incluyendo:
- **Organización en Proyectos GIT y Maven**: Cada módulo como un proyecto independiente en GIT con una estructura modular en Maven.
- **Paquetes Java**: Descripción de la estructura de paquetes dentro de cada módulo (`comun`, `controllers`, `mappers`, `models`, `persistencias`, `services`), y las clases y interfaces que deben incluir.
- **Controladores, Mappers y Servicios**: Convenciones para el desarrollo de controladores REST, mapeadores de datos y servicios con lógica de negocio.

## Recomendaciones y Mejores Prácticas
Durante el desarrollo de nuevas funcionalidades, es esencial que cualquier situación no contemplada en estos documentos sea analizada y se proponga una solución. Esta propuesta debe ser revisada y aprobada por el equipo encargado de la definición de estándares para asegurar la coherencia en todo el proyecto.

## Contribuciones
Las contribuciones son bienvenidas para mejorar y mantener este manual actualizado. Si tienes alguna sugerencia o encuentras algún problema, por favor abre un issue o envía un pull request.

## Contacto
Para más información o consultas sobre el contenido de este manual, puedes ponerte en contacto con el equipo de desarrollo del Plan Director.

---

Este README proporciona una visión general del contenido y estructura del repositorio, sirviendo como guía para cualquier desarrollador que necesite seguir los estándares definidos para el Plan Director.




