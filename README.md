# E-commerce Impresiones en 3D

![](./src/components/imagen/header.png)


Proyecto Final de React.JS

Tienda de E-commerce en donde se podran comprar distintos productos echos en una impresora 3D Ender v3 Pro.

## Librerías utilizadas

- [Firebase](https://firebase.google.com/)

  Se utiliza para alojar la base de datos de los productos del proyecto en Firesotre Databse. También se utiliza para darle dinamismo al menu de navegación/categorias.

- [react-bootstrap](https://react-bootstrap.github.io)

  Se utiliza la libreria de Bootstrap para darle estilos al proyecto.

- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)

  Utilizada para desarrollar la navegabilidad básica en la aplicación.

- [react-toastify](https://github.com/fkhadra/react-toastify)

  Se utiliza para notificar al usuario la cantidad de productos que agrega al carrito.

- [react-icons](https://react-icons.github.io/react-icons/)

  Utilizada para agregar iconos a nuestra aplicación

## Funcionalidades del proyecto

- El usuario puede:
  - Navegar por todos los productos de la tienda.
  - Ver los detalles de cada producto.
  - Ingresar en todo momento al Carrito.
  - Agregar items al Carrito, en donde nunca podra agregar cantidades superiores al stock disponible de cada item.
  - Eliminar un item espécifico del Carrito.
  - Eliminar todos los items agregados al Carrito.
  - Ver la descripción, precio unitario, cantidades y precio total de los productos agregados al carrito.
  - Realizar la compra a traves de un formulario
  - Finalizada la compra, el usuario obtiene su numero de compra

### Pasos para correr el proyecto en local

1. Clonar el repositorio

```
git clone https://github.com/CVillamarin/ProyectoFinal-CoderHouse-React
```

2. Abrirlo en [VSC](https://code.visualstudio.com) (o en otro editor de código) e instalar las dependencias

```
npm install
```

3. Correr el proyecto en local

```
npm start
```

### Variables de Entorno

Como pueden afectar al comportamiento en la ejecución de la apliciación, las mimsas no se encuentran disponibles.

