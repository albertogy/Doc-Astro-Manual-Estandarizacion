---
title: Base de Datos
date: 2024-08-10
description: Define la estructura de esquemas y tablas, incluyendo convenciones de nombres, tipos de datos y prácticas de seguridad para la gestión de datos en la base de datos.
tags: ["base de datos", "esquemas", "tablas", "convenciones de nombres", "estructura de datos", "seguridad", "auditoría", "optimización de consultas"]

---

# Base de Datos

Siguiendo la estructura de aplicaciones y módulos que hemos visto, los nombres de las tablas de la base de datos tendrán la siguiente forma:

## Esquemas

Creación de un usuario/esquema de base de datos por cada uno de los módulos. El sentido de crear un esquema es por seguridad, para acotar el riesgo que pueda tener el entrar un usuario al resto de tablas de otro esquema. Ejemplo: sede, app, pd, etc.

A las tablas de otros esquemas se les dará solo acceso en modo consulta cuando sea necesario.

Para el resto de las operaciones CRUD que no sean consultas se harían directamente por peticiones a los servicios de su mantenimiento.

## Tablas

El nombre de las tablas irá siempre en minúscula, separando las distintas palabras que forman el nombre con guiones bajos, así pues, tendrá el formato `ap_modulo_tabla`:

- **2 caracteres para indicar la aplicación**, “pd” para el caso de plan director.
- **Módulo al que pertenece la tabla**.
- **Nombre de la tabla en singular**.

Las tablas que no se gestionen específicamente en un módulo comenzarán por “dpj” y en otro caso por el módulo donde se haga concretamente la gestión (sede, app, pd...).

Siempre que sea posible, la clave primaria de la tabla será una sola columna, de tipo `SERIAL` y tamaño de acuerdo con las necesidades estimadas de la tabla.

Para el caso de tablas que indican la relación N:N entre otras dos tablas, el formato será `ap_modulo_tabla1_tabla2`.

A la hora de realizar el `CREATE TABLE`, excluiremos la definición de la clave primaria de la sentencia. Posteriormente crearemos el índice único y por último modificaremos la tabla para añadir la restricción de la clave primaria. Ejemplo:

```sql
create table "fcp".pd_prueba_indices2
(
    x_indice serial not null,
    campo1 smallint not null,
    campo2 integer not null
);

create unique index "fcp".indice_prueba on "fcp".pd_prueba_indices2 (x_indice) in dbsindices;

alter table "fcp".pd_prueba_indices2 add constraint primary key (x_indice);
```

## Columnas

| **Categoría**         | **Prefijo**   | **Descripción**                                                                                                                                                                                           |
| --------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Clave primaria**    | `x_tabla`     | La clave primaria de la tabla. Comenzarán por `x` seguido del nombre de la tabla. (Ej. `x_area`)                                                                                                          |
| **Clave externa**     | `tab_x_tabla` | Las columnas que contengan referencias a otras tablas comenzarán por tres caracteres identificadores de la tabla referenciada, seguido del nombre de la clave primaria de dicha tabla (Ej. `are_x_area`). |
| **Código**            | `c_______`    | Las columnas cuyo contenido es un código comenzarán por `c` (Ej. `c_usuario`)                                                                                                                             |
| **Descripción**       | `d_______`    | Las columnas cuyo contenido es una descripción de hasta 20 caracteres comenzarán por `d` y tendrán tipo `varchar` (Ej. `d_email`)                                                                         |
| **Descripción larga** | `l_______`    | Las columnas cuyo contenido es una descripción de más de 20 caracteres comenzarán por `l` y tendrán tipo `varchar` (Ej. `l_pais`)                                                                         |
| **Fecha**             | `f________`   | Las columnas con fechas comenzarán por `f` y su tipo será `datetime` con el formato que corresponda.                                                                                                      |
| **Número**            | `n________`   | Las columnas con números comenzarán por `n` (Ej. `n_anio_objetivo`)                                                                                                                                       |
| **Importe**           | `v________`   | Las columnas con importes comenzarán por `v` y tendrán el formato `decimal(12,2)`                                                                                                                         |
| **Indicativos**       | `i________`   | Las columnas con indicadores booleanos comenzarán por `i` y usualmente tendrán formato `varchar` de un 1 carácter.                                                                                        |
| **Blob**              | `b_______`    | Las columnas que almacenen objetos binarios de gran tamaño comenzarán por `b`.                                                                                                                            |
| **Bson**              | `j_______`    | Columnas que contengan cadenas con objetos `json` (Ej. `j_datos`)                                                                                                                                         |
| **Xml**               | `m______`     | Columnas que contengan cadenas con formato `xml` (Ej. `m_definicion`)                                                                                                                                     |

## Columnas de auditoría

| **Columna**          | **Descripción**                                                  |
| -------------------- | ---------------------------------------------------------------- |
| `c_usu_alta`         | Usuario de creación - `char(8)`                                  |
| `f_alta`             | Fecha de creación - `datetime year to fraction(3)`               |
| `c_usu_modificacion` | Usuario de la última modificación - `char(8)`                    |
| `f_modificacion`     | Fecha de la última modificación - `datetime year to fraction(3)` |

En caso de borrado lógico, se debe usar un campo indicador de activo (`i_activo`).

En caso de que la funcionalidad pueda depender de la UT con la que está accediendo el usuario, se debe incluir la unidad tramitadora (`c_utramit_alta`, `c_utramit_modificacion`).

Todas las tablas tendrán las columnas para registrar el usuario y la fecha que creó el registro, así como el usuario y la fecha de la última modificación.

### Bloqueo a Nivel de Filas

En tablas que tengan muchas operaciones de `insert`, `update`, y `delete`, se debe cambiar el bloqueo de nivel tabla a nivel de fila.

Si durante el desarrollo de cualquier nueva funcionalidad se detecta algún punto no contemplado aquí, se creará una propuesta para dar cobertura al caso. Esta propuesta deberá ser expuesta y aprobada por el grupo encargado de la definición de los estándares recogidos en este documento.
