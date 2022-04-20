# GIT Desarrollo Colaborativo

Esto es una guia para quien acceda a este repositorio y conozca como funciona la herramienta GIT, asi como tambien su sincronizacion y trabajo en conjunto con el servidor github.com

## Areas de GIT
* Working Directory
* Staging Area (INDEX)
* Repository

## configuracion inicial
1. __git init__ : inicializa el repositorio
1. __git config --global user.name `<usuario>`__ : define el nombre de usuario para todos los proyectos locales
1. __git config --global user.email__ `<correo>` : define el correo personal para todos los proyectos locales

## gestion del proyecto
* __Acceso por primera vez y descarga:__
  1. __git clone `https://github.com/c215714n/git-lx09`__ descargamos el proyecto en nuestra computadora
  1. __cd `git-lx09`__ abrimos el proyecto descargado
* __Actualizacion del repositorio local:__
  1. __git fetch `origin`__ descargamos el historial de cambios para verificar si existen modificaciones
  1. __git diff `origin/main`__ comprobamos las diferencias entre nuestro repositorio y el remoto
  1. __git pull `origin` `main`__ integramos los cambios remotos en nuestra rama local
