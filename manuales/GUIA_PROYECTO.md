## Comando oficial para crear proyectos:
npx create-expo-app nombredemiapp --template blank
### Selecionar SDK 54:
For learning with Expo Go (SDK 54)
### Inicializar el proyecto con:
npx expo start o npm start

## Tecnologías utilizadas
*   Tecnología	    Versión
    Node.js	22      LTS
    Expo SDK	    54
    React Native	0.81.x
    React	        19

## ¿Cómo trabajan juntas?
### Node.js
* Permite ejecutar herramientas del proyecto desde la terminal, por ejemplo:
    - npm
    - npx
    - Expo
    - Metro Bundler
* Sin Node.js no podríamos:
    - crear proyectos,
    - instalar dependencias,
    - levantar React Native con Expo.
    
### Expo SDK 54
"Al seleccionar SDK 54, Expo utiliza versiones compatibles con el ecosistema del proyecto."
* Expo simplifica el trabajo con React Native proporcionando:
    - configuración y herramientas para el desarrollo móvil.
    - compatibilidad entre versiones de Expo, React Native y sus
      dependencias.
    - APIs y funcionalidades para acceder a diferentes capacidades
      del dispositivo.
* Dentro del ecosistema Expo podemos encontrar funcionalidades como:
    - SDK de Expo y sus versiones.
    - Cámara.
    - Imágenes.
    - Iconos. [https://docs.expo.dev/guides/icons/]
    - Notificaciones.
    - Almacenamiento.
    - Ubicación.
    - Permisos.
    - Sensores.
    - Componentes y APIs disponibles.
* Al instalar nuevas librerías, se recomienda utilizar los comandos
  de Expo cuando corresponda para obtener versiones compatibles con
  el SDK utilizado.
* Expo cuenta con documentación oficial donde se pueden consultar las
  funcionalidades disponibles, sus configuraciones, versiones y
  compatibilidad.
**### Documentación oficial**
[https://docs.expo.dev/]


### React Native 0.81.x
* Es el framework principal que utilizamos para construir aplicaciones móviles Android e iOS usando JavaScript.
* La versión 0.81.x fue instalada automáticamente por Expo SDK 54 al ser la más compatible y estable para dicho ecosistema.

### React 19
* React se utiliza para trabajar con:
    - componentes,
    - JSX,
    - estados,
    - hooks,
    - lógica de interfaz.
    - React Native utiliza React internamente para construir la aplicación móvil.
    
### rn
* rnfes te permite autocomplemetar clases en React Native gracias a las extensiones instaladas.
