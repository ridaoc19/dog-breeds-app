<center><img src='./src/assets/logo.svg' width=350 alt='logo'/></center>

# Mundo Canino

## Descripción

Esta aplicación web desarrollada en React permite explorar diversas razas de perros y visualizar imágenes correspondientes a la raza seleccionada. Utiliza una API pública para obtener tanto la lista de razas disponibles como las imágenes específicas de cada una.

En esta prueba técnica, he buscado utilizar una amplia gama de herramientas asociadas con React, con un enfoque claro en mantener un código limpio, modularizado y bien estructurado. Se ha puesto un énfasis especial en el tipado para mejorar la robustez del código, asegurando que la aplicación funcione sin errores visibles en la consola del navegador.

## ⚠️ **Importante**

> **Documentación e Historias (Storybook):**
>
> Toda la aplicación se encuentra documentada componente por componente.

> **Deploy:**
>
> Tanto la aplicación como las historias y documentación de componentes se encuentran desplegadas en AWS en el servicio Lightsail. Puede ver:
>
> - **Historias (StoryBook):** [https://files.ridaoc.es/](https://files.ridaoc.es/)
> - **Aplicación Mundo Canino App:** [https://server.ridaoc.es/](https://server.ridaoc.es/)

### Requerimientos

Desarrollar una aplicación que disponga de una única pantalla, con uno o dos controles desplegables en la parte superior que nos permita seleccionar una raza concreta de perros y, al hacerlo, nos muestre una lista de imágenes de la raza seleccionada. Este servicio expone la lista de las razas: https://dog.ceo/api/breeds/list/all y con este podrá obtener las rutas de las imágenes de una raza dada: https://dog.ceo/api/breed/<raza>/images. "

Trabajar con "React" y aplicar todo lo que se consideres oportuno.

## Stack

```json
  "dependencies": {
		"@reduxjs/toolkit": "^2.2.5",
		"react": "^18.2.0",
		"react-dom": "^18.2.0",
		"react-redux": "^9.1.2"
	},
	"devDependencies": {
		"@storybook/test": "^8.1.10",
		"@storybook/test-runner": "^0.18.2",
	  "eslint": "^8.57.0",
		"eslint-config-airbnb": "^19.0.4",
		"eslint-config-airbnb-typescript": "^18.0.0",
		"prettier": "^3.3.2",
		"sass": "^1.77.6",
		"storybook": "^8.1.10",
		"typescript": "^5.2.2",
		"vite": "^5.2.0"
	}
```

### Requisitos Previos

- Node.js (versión 18 o superior)
- npm (versión 10 o superior)

### Clonar el Repositorio

```bash
git clone https://github.com/ridaoc19/dog-breeds-app
```

### Instalación de Dependencias

```bash
npm install
```

### Modo Development

```bash
npm run dev
```

### Modo Production

```bash
npm run build
```

### Ejecutar Tests y documentación

Para iniciar Storybook, utiliza el comando `npm run storybook`. Para verificar la integridad y el funcionamiento de las historias, así como para garantizar que las pruebas estén en orden, ejecuta `npm run test-storybook`. Es importante destacar que este último comando solo funcionará si ya has iniciado Storybook con el comando anterior.

```bash
npm run storybook
npm run test-storybook
```

### Pruebas, Validación y herramientas

- **ESlint**: Configurado con `eslint-config-airbnb-typescript` para mantener el código limpio y sin errores.

```bash
npm run lint
```

- **Prettier**: Para mantener un código limpio y consistente, se ha integrado [Prettier](https://prettier.io/) en este proyecto.

```bash
npm run format
```

## Imágenes (Aplicación responsiva)

Vista Favoritos

Al ingresar a la página, encontrarás el título "Favoritos". Sin embargo, el campo donde se renderizan las tarjetas con la foto estará vacío ya que es la primera vez que ingresas (Las tarjetas en favoritos muestran la raza y la subraza). Para que esto no suceda, debe agregar razas a favoritos después de realizar una búsqueda.

### Favoritos Desktop

<center><img src='./src/assets/Home-Favoritos.png' alt='favoritos'/></center>

### Favoritos Phone

<center><img src='./src/assets/Home-Favoritos-phone.jpeg' alt='favoritos-phone'/></center>

Vista de Búsqueda

- Raza: La vista de búsqueda se inicia con la raza seleccionada. Si la raza tiene subrazas, podrás ver un select habilitado para elegir la subraza correspondiente.
- Validación y Ajustes: La aplicación valida y ajusta el número de fotos disponibles según la raza seleccionada. Esto permite tanto aumentar como reducir el número de imágenes mostradas.
- Select de Razas: En el selector de razas, verás el nombre de cada raza acompañado por un número. Este número indica la cantidad de subrazas disponibles para esa raza.

### Búsqueda Desktop

<center><img src='./src/assets/Home-Busqueda.png' alt='busca'/></center>

### Búsqueda phone

<center><img src='./src/assets/Home-Busqueda-phone.jpeg' alt='busca-phone'/></center>

### StoryBook

Se puede observar todos los componentes, documentación y test de manera individual

<center><img src='./src/assets/storybook.png' alt='storybook'/></center>

Este proyecto fue desarrollado por **Ricardo David Ocampo**.

- **LinkedIn:** [https://www.linkedin.com/in/ridaoc19](https://www.linkedin.com/in/ridaoc19)
- **GitHub:** [https://github.com/ridaoc19](https://github.com/ridaoc19)
