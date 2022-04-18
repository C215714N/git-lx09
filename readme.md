<img src="https://avatars.githubusercontent.com/u/50064196?v=4" width="200px" style="margin:1rem 0 -3rem;">

# GIT Desarrollo Colaborativo

Esto es una guia para quien acceda a este repositorio y conozca como funciona la herramienta GIT, asi como tambien su sincronizacion y trabajo en conjunto con el servidor github.com

## Tabla de contenidos
* [Areas de Git](#areas-de-git)
* [Configuracion inicial](#configuracion-inicial)
* [Gestion del Proyecto](#gestion-del-proyecto)

## Areas de GIT

> * __Working Directory__ corresponde a la carpeta donde creamos el proyecto
> * __Staging Area (INDEX)__ area de control donde se realiza seguimiento de los archivos
> * __Repository__ area donde se almacenan las confirmaciones de cambios

## Configuracion inicial

> 1. __git init__ : inicializa el repositorio
> 1. __git config --global user.name `<usuario>`__ : define el nombre de usuario para todos los proyectos locales
> 1. __git config --global user.email `<correo>`__ : define el correo personal para todos los proyectos locales

## Gestion del proyecto

Si inicializamos un repositorio debemos crear el mismo en nuestro servidor para poder gestionar los cambios que vayamos realizando localmente, pero en caso que quieras utilizar este proyecto y continuarlo podes realizar las siguientes acciones segun corresponda.

### Acceso por primera vez y descarga:

> 1. __git clone `https://github.com/c215714n/git-lx09`__ descargamos el proyecto en nuestra computadora
> 1. __cd `git-lx09`__ abrimos el proyecto descargado

### Actualizacion del repositorio local:

> 1. __git fetch `origin`__ descargamos el historial de cambios para verificar si existen modificaciones
> 1. __git diff `origin/main`__ comprobamos las diferencias entre nuestro repositorio y el remoto
> 1. __git pull `origin` `main`__ integramos los cambios remotos en nuestra rama local
