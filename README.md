# Semana 1
## Ejecutar archivo Javascrip por Bash gracias a Node.js
node index.js

# SEMANA 2
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
* Expo simplifica el trabajo con React Native proporcionando:
    - configuración automática
    - compatibilidad entre versiones
    - herramientas listas para desarrollo móvil.
    - Al seleccionar SDK 54, Expo instala automáticamente las versiones compatibles del ecosistema.

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
