# Ejercicios
## Ejercicio 1

- Replicar proyecto completo Node con TS y Express visto en el vídeo
  - Subir el enlace al repositorio Github / Gitlab donde lo subas
  - Crear un README.md explicando:
    - Las dependencias que has instalado y para qué sirve cada una de ellas
    - Los scripts de NPM que hayas creado y para qué sirven cada uno de ellos
    - Las variables de entorno que habrá que crear en el .env para cualquiera que lo descargue

- Creación de rutas (endpoints del servidor):
  - Ruta tipo GET que devuelva una Response 200 con un JSON con la siguiente estructura:
    > “data”: {
    >     “message”: “Goodbye, world”
    > }
- EXTRA: Investigar cómo leer parámetros de consulta por la URL
  - Modificar la ruta “hello” para que reciba un parámetro query (?name=”Nombre”) y devuelva una Response 200 con un JSON con la siguiente estructura:
    > “data”: {
    >     “message”: “Hola, {nombre pasado por parámetro o “anónimo” en caso de que no exista el parámetro}”
    > }
- Instalar Postman y probar las dos rutas del proyecto

## Ejercio 2

- Replicar proyecto completo Node con TS y Express visto en el vídeo
  - Subir el enlace al repositorio Github / Gitlab donde lo subas
  - Crear un README.md explicando:
    - Las dependencias que has instalado y para qué sirve cada una de ellas
    - Los scripts de NPM que hayas creado y para qué sirven cada uno de ellos

- Crear una ruta nueva:
  - api/goodbye
    - Debe devolver un JSON con una despedida:
      > {
      >   “message”: “Goodbye {NOMBRE POR QUERY PARAMS}”,
      >   “Date”: {FECHA ACTUAL}
      > }
    - Recuerda crear un type específico para esta respuesta dentro de la carpeta de controllers
  - Recuerda crear Controller y Router oportuno

- Realiza pruebas con Postman y demuestra que funciona correctamente

## Ejercicio 3
Enunciado del ejercicio: 

- Replicar proyecto completo Node con TS y Express visto en el vídeo
- Replicar la creación de base de datos en MongoDB
    - Crear una colección llamada Katas (retos de programación)
      - Cada documento deberá tener:
        - Name
        - Description
        - Level (nivel de dificultad numérico)
        - User (id asociado al usuario que lo ha creado)
        - Date (Fecha de creación del reto)
        - Valoration (sobre 5, valor numérico)
        - Chances (número de intentos realizados por otros usuarios)
- Crear archivo de Kata.Entity.ts con el esquema Mongoose correspondiente

## Ejercicio 4

### Parte 1

- Replicar proyecto completo Node con TS y Express visto en el vídeo
  - Asegúrate de poder ver correctamente documentada tu API con Swagger

- Descarga el JSON de 5000 contactos (Carpeta de MOCKS del Repo del proyecto (https://gitlab.com/masajo/code-verifier-backend/-/tree/main/mocks))

  - JSON obtenido de la API Rest Pública (https://randomuser.me/api/?results=5000)
  - Crea una base de datos en Mongo con Mongo Compass llamada “Pruebas”
  - Importa el JSON a una colección llamada Contacts

- Hacer peticiones al servidor de Mongo desde Mongo Compass & Mongo Shell para hacer los siguientes ejercicios:

  - Listar todos los contactos.
  - Busca el primer contacto que sea de Alemania (Germany).
  - Busca todos los contactos que tengan Blake como nombre (first).
  - Busca los primeros 5 contactos que tengan como género (gender) hombre (male)
  - Devuelve los 4 primeros contactos ordenados por nombre (name) de manera descendente.
  - Clona la colección de Contacts a CopiaContacts y luego bórrala.
  - Renombra el campo de name por nombre.
  - Borra todos los contactos que tengan como estado (state) Florida.

Como solución deberás entregar ya sea escrito o en captura los scripts a ejecutar de cada parte.

### Parte 2
- Muestra las primeras 5 ciudades que empiecen por A ordenadas de manera ascendente, las soluciones deben ser únicas.
- Crea una colección a parte, que solo contenga a los contactos de Francia (France) y que tengan entre 18 y 50 años. Usa una agregación para ello.
- Añade un número favorito a cada contacto, luego crea un bucket agrupando por número favorito que separe en 5 segmentos.
- En la colección de Contatcs, haz una proyección la cual tiene que devolver solo el name y username del contacto.
- Haz una consulta en la colección de Contacts la cual devuelva un documento por cada nombre (name) y que sea único, ordenado por apellido (last), tienes que usar el operador $unwind.
- Haz una proyección convirtiendo la fecha (date) a un formato DD-MM-AAAA, la nueva variable será fechaNacimiento

Como solución deberás entregar ya sea escrito o en captura los scripts a ejecutar de cada parte.

## Ejercicio 5
- Replicar proyecto completo Node con TS y Express visto en el vídeo
  - Asegúrate de poder realizar todas las operaciones CRUD en la colección de Users de la base de datos

- Crear un nuevo modelo y endpoints para gestionar peticiones CRUD para la colección de Katas. Además:
  - Debes poder filtrar las Katas disponibles por nivel de dificultad
  - Debes poder obtener las 5 Katas más recientes
  - Debes poder listar las Katas ordenadas de mejor valoradas a menos valoradas
  - Debes poder valorar una Kata con una nueva nota y debe almacenarse la media
    - Por lo que el modelo de Kata deberá tener un valor que será número de valoraciones de usuarios, para así obtener la media
  - Debes poder encontrar las Katas ordenadas por intentos

  Entity -> ORM -> Controller -> Routes

# Cambio a Youtube
## Sesión 6
- https://www.youtube.com/watch?v=YF7Hv35v7w0&list=PLkVpKYNT_U9erM5pz0t-YBdJtK1TI9YF6&index=6
  - Reproducir lo realizado en el video
  - 01:16:42 Register User

## Sesión 7
- https://www.youtube.com/watch?v=aYpYwMnHK9w&list=PLkVpKYNT_U9erM5pz0t-YBdJtK1TI9YF6&index=7
  - 00:00:00