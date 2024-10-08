# Aplicación de Productos y Favoritos

Esta es una aplicación desarrollada en React que utiliza **React Router** para la navegación. Los usuarios pueden navegar entre diferentes páginas, ver productos, abrir una ventana modal con detalles del producto, y añadir productos a una lista de favoritos.

Puedes ver la demo en vivo aquí: [App de Productos y Favoritos](https://bereverte.github.io/products-router-app/)

## Tecnologías utilizadas

- **React**: Librería principal para construir la interfaz.
- **React Router**: Para la navegación entre diferentes páginas.
- **Hooks de React**: Para gestionar el estado local (`useState`) y compartir estado global (con un contexto para los favoritos).

## Estructura del proyecto

- **`App.js`**: Punto de entrada de la aplicación. Gestiona las rutas con **React Router** y organiza las páginas de productos, favoritos y la página de inicio.
- **`ProductsPage.js`**: Muestra la colección de productos disponibles. Permite abrir una ventana modal para ver los detalles del producto y añadir productos a favoritos.
- **`FavoritesPage.js`**: Muestra los productos añadidos a la lista de favoritos. Permite quitar productos de la lista de favoritos.
- **`Header.js`**: Barra de navegación con un menú desplegable que permite al usuario navegar entre las páginas de la aplicación.
- **`Products.js`**: Componente que representa cada producto en la lista y permite abrir la ventana modal con los detalles del producto.
