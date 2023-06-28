## Propital Inmobiliaria (Challenge técnico)

Dicho repositorio representa lo solicitado por el cliente, un sistema de visualización de proyectos inmobiliarios en un mapa interactivo el cual el mismo esta dessarrollado utilizando como lenguaje principal Javascript, React como framework , Redux como contenedor de estados para almacenar la solicitud a la API (creada en Mocky), y los estados para filtrar y modificar la parte interactiva del mapa y Material UI como biblioteca de componentes de para la interfaz de usuario

### `Como ejecutar "propital-inmobiliaria" de manera local`

Una vez que clonemos el repositorio en nuestro Escritorio o donde mas prefieras, debemos ejecutar los siguientes comandos en la ruta raiz del mismo

### `npm install`

Suponiendo que clonamos el repositorio en el escritorio, debemos ejecutar npm install en la ruta raiz del repositorio. Ejemplo : Escritorio/PROPITAL-INVERSIONES

### `npm start`

Una vez instaladas las dependencia, debemos ejecutar npm start para levantar el proyecto en el local, el mismo se ejecutara en localhost:3000

### `Completar .env`

Una vez que el proyecto se ha iniciado localmente, es necesario crear un archivo llamado .env en la carpeta raíz del proyecto, donde se ejecutó el comando npm install. En este archivo .env, definiremos una variable de entorno con el prefijo "REACT_APP_TOKEN", seguido del valor de nuestra clave de API. Esta clave de API se utilizará para realizar solicitudes de información al servicio del mapa creativo. Al definir esta variable de entorno en el archivo .env, garantizamos que nuestra clave de API esté protegida y no se comparta públicamente en el código fuente del proyecto.

De igual manera, en el codigo esta "hardcoeada" la apikey, pero la idea el .env es proteger datos sensibles como lo es una apikey.

Siguiendo los pasos anteriores, no deberia haber problema alguno al ejecutar el proyecto de manera Local

## Descripcion del proyecto y tecnologias implementadas

El proyecto, como si bien ya mencionamos antes, se trata de un mapa interactivo en el cual el cliente va poder filtrar los proyectos por los criterios mas relevantes, como lo son el Precio, la Ubicacion, el tipo de propiedad, tipo de entrega, superficie y la ciudad donde se encuentra.

El metodo de filtrado es simple, se eligen las preferencias y se apreta el boton aplicar, sin embargo, quise implementar un boton extra donde se podian limpiar los filtros y un popup de aviso para cuando el array al cual le aplicamos los filtros, no contiene ninguna ciudad, estas fueron mis dos principales complicaciones.

En cuanto al mapa, decidi utilizar una libreria llamada React-map-gl, que me ofrece distinto tipos de mapas y funcionalidades, como navegar en el mismo, hacer zoom, interactuar con el, etc.

Siguiendo con el mismo, se pueden aprecias distinto tipos de marcadores, Rojos para la ciudad, Negros para las parcelas, Amarillo para los departamentos semi-nuevos, y verdes para los nuevos. Al hacer click sobre un marcador, se puede obtener la informacion principal del proyecto, como asi tambien una foto que en este caso, use genericas para la reenderizacion y las implemente mediante la logica en la creacion de las cartas. La idea principal seria que las imagenes que representan verdaderamente al proyecto el componente al momento de reenderizarlas, las absorba como propiedad implicita del objeto.

Elegí utilizar React-Redux para realizar el challenge porque me permite construir aplicaciones web de manera más rápida y eficiente. React es una biblioteca muy popular que me ayuda a crear interfaces de usuario interactivas y atractivas, sin contar la infinidad de librerias de diseño que se pueden implementar, que en este caso utilice Material UI, pero otra como ant-desing tambien son muy interesantes.En relación a Redux, elegí utilizarlo para gestionar el estado de mi aplicación de forma estructurada y sencilla de mantener. Aunque el proyecto era pequeño y podría haberse implementado de manera más simple utilizando los hooks de React, consideré importante tener en cuenta la futura escalabilidad y mantenimiento del código. Por esta razón, opté por utilizar Redux, ya que ofrece una solución más robusta y escalable a largo plazo, incluso para proyectos más pequeños. Al hacerlo, pude garantizar una gestión eficiente del estado y facilitar la incorporación de nuevas funcionalidades en el futuro sin generar muchas complicaciones.

Para abordar la persistencia de datos en el proyecto, opté por utilizar Mocky, una herramienta que me permite crear y simular servicios web falsos (mocks) para el desarrollo y las pruebas de la aplicación. En este caso, elegí Mocky porque mi principal necesidad era realizar solicitudes GET para obtener los datos necesarios, por lo que consideré que no era necesario implementar una API REST completa con enrutamiento y otras funcionalidades adicionales. Mocky me permitió crear un archivo JSON con los datos necesarios y configurar una URL para acceder a ellos. De esta manera, pude simular las respuestas y acceder a los datos requeridos sin tener que desarrollar una API real. Esto resultó conveniente y eficiente para el alcance y los requisitos específicos del proyecto. Sin embargo, si el escenario hubiese sido otro, mi stack para realizar una base de datos para interactuar con el cliente se compone `Node, Sequelize, Express Y Postgresql`
