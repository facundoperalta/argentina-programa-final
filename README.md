# argentina-programa-final
Proyecto Integrador Portfolio Web Full Stack #YoProgramo

25 de junio 2022
- Creación de repositorio en github y clonación en repositorio local.
- Creación de proyecto en angular e intalación de bootstrap (primeros commits).
- Comienzo Barra de Navegación probando diferentes modelos de bootstrap.

26 de junio 2022
- Barra de navegación terminada v1 (navbar responsive, offcanvas). 
  Probé dividir la barra en diferentes componentes (Logo - Enlances - Botón de login) pero tuve dificultades para poder alinearlos en el contenedor. Finalmente resolví que la barra de navegación sea un solo componente.
- Commit y push.

02 de julio 2022
- Banner terminado e incorporado al header junto con la barra de navegación. Diseño de imagen del banner.

03 de julio 2022
- Sección "acerca de mi" creada en un componente independiente. Sección finalizada con diseño provisorio. Después de intentar con el sistema de grid responsive de bootstrap, probé con el contenedor "card" y opté por este último. 

05 de julio 2022
- Sección "experiencia laboral" creada en un componente independiente. Sección finalizada con diseño provisorio. Mi idea es hacer una tabla que en la primera columna figuren el puesto de la experiencia laboral, y que al hacer click cargue la información en una segunda columna más ancha, si tengo tiempo lo voy a intentar hacer.
- Sección "educación" creada en un componente independiente. Utilicé los estilos de listas predefinidos de bootstrap 5, tengo problemas para ubicar los logos. Creo que voy a rediseñar la sección de "experiencia laboral" en base a la de "educación".

06 de julio 2022
- Sección "habilidades duras y blandas" creada en un componente independiente. Sección finalizada con el diseño de las barras de progreso de bootstrap 5.

07 de julio 2022
- Sección de "proyectos" creada en un componente independiente. La sección implementa las tarjetas (cards) de bootstrap 5.

10 de julio 2022
- Enlace para la sección "proyectos" agregado a la barra de navegación. Todos los enlaces funcionan.
- Rediseño de las secciones "acerca de mi", "experiencia laboral", "educación" y "proyectos". Algunos cambios en la redacción de los contenidos.
- Desarrollo de Front End Dinámico terminado, solo falta cambiar la foto de perfil.

11 de julio 2022
- Creación del "footer".

23 de julio 2022
- Confección Diagrama Entidad Relación, Esquema lógico de la base de datos, UML del portfolio.

07 de agosto 2022
- Creación repositorio para el backend en github y base de datos vacía con MySQL Workbench. Comienzo de la API REST con SpringBoot (paquetes para persona, educación, experiencia, habilidades duras y blandas, proyectos; cada una con sus respectivas capas: model, repository, service, controller).

09 de agosto 2022
- API REST terminada, primera versión de prueba. Comienzo vinculación backend con frontend en angular.

11 de agosto 2022
- Avance en vinculación front-end y back-end (clase person).

12 de agosto 2022
- Prueba de métodos crud con postman (todas las clases), llenado de la base de datos con método post en postman.

13 de agosto 2022
- Vinculación front-end y backend completa. Queda modificar algunos aspectos del diseño front-end, como agregar botones de edición.

14 de agosto 2022
 - Creación de paquete DTO y sus respectivas clases. Modificación de clases controllers.
 
 21 de agosto 2022
 - Todos los componentes en angular vinculados con la base de datos. CRUD funcionanado.
 
 22 al 27 de agosto
 - Login JWT. Siguiendo un video tutorial del canal Luigi Code. El login quedó con dos roles, un usuario con rol de usuario para poder visualizar el contenido del portfolio; y un segundo rol de administrador que es quien puede editar el portfolio. Están el código para crear un nuevo usuario pero no está implementado en el frontend.
 - Correción y limpieza del código. La aplicación funciona de manera local. Todo listo para comenzar el deploy.
 
 28 y 29 de agosto
 - Deploy: base de datos en Clever Cloud, Backend en Heroku y Frontend en Firebase. Carga de base de datos de Clever Cloud.
