---
title: Servicios REST
date: 2024-08-10
description: Organización modular en proyectos GIT únicos con submódulos en Maven y una estructura de paquetes raíz es.dipujaen.nombreModulo.
tags: ["config"]
---

# Servicios REST

Cada uno de los módulos definidos en el punto 2 de este documento será un único proyecto GIT, mientras que en Maven se definirá un proyecto padre del que colgarán los módulos Maven para cada uno de los componentes (modelos, persistencia, servicios y controladores).

El paquete Java raíz para cada uno de los servicios será `es.dipujaen.nombreModulo`, siendo “nombreModulo” el nombre definido para el módulo en el punto dos de este documento.

Bajo este paquete encontraremos los siguientes paquetes y contenidos:

- `es.dipujaen.nombreModulo.comun`: Contendrá la clase `ControllerGeneral` y `CustomErrorController` para el módulo.
- `es.dipujaen.nombreModulo.comun.config`: Contendrá las clases de configuración para Spring.
- `es.dipujaen.nombreModulo.comun.constantes`: Contendrá la(s) clase(s) de constantes.
- `es.dipujaen.nombreModulo.controllers`: Contendrá los controladores de los servicios REST.
- `es.dipujaen.nombreModulo.controllersext`: Contendrá los controladores de los servicios REST que no deben validar el token de acceso.
- `es.dipujaen.nombreModulo.filters`: Clases de datos utilizados por los controladores para transferir la información de entrada y salida de los servicios REST.
- `es.dipujaen.nombreModulo.mappers`: Clases para transformar las clases `filters` a `models` y de `models` a `filters`.
- `es.dipujaen.nombreModulo.models`: Clases de representación de las tablas de la base de datos.
- `es.dipujaen.nombreModulo.persistencias.dao`: Interfaces `repository` para gestionar cada una de las tablas de la base de datos.
- `es.dipujaen.nombreModulo.persistencias.dao.interfaces`: En el caso de necesitar definir sentencias nativas de forma manual, se definirá una interfaz con el/los método(s) necesarios.
- `es.dipujaen.nombreModulo.persistencias.dao.impl`: Implementación de la interfaz definida para la creación de sentencias nativas de la base de datos.
- `es.dipujaen.nombreModulo.services.interfaces`: Interfaces de definición de los servicios con la lógica de negocio de los servicios REST.
- `es.dipujaen.nombreModulo.services.impl`: Implementación de las interfaces con la lógica de negocio de los servicios REST.
