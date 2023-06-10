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

