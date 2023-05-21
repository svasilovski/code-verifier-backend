# Enunciado del ejercicio:
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

# code-verifier-backend
Node Express project - backend

# Crear repositorio en GitHub.

# Clonar repositorio creado.

# Inicializar el proyecto

```terminal
$ npm init
```

> Completar los datos de
> - name
> - description
> - main
> - respository
> - keywords
> - autor
> - license

# instalar dependencias

```terminal
$ npm install --save express dotenv
```

```terminal
$ npm install -D nodemoon
```

```terminal
$ npm i -D typescript @types/express @types/node
```

tsc es la herramineta de typescript, no esta de modo global sino en el proyecto para inicializarla ejecutar:
```terminal
$ npx tsc --init
```
Ejecutar comandos de manera concurrente
```terminal
$ npm i -D concurrently
```

```terminal
$ npm i -D webpack webpack-cli webpack-node-externals webpack-shell-plugin
```

```terminal
$ npm i -D eslint jest ts-jest @types/jest supertest
```

## iniciar la configuracion de eslint
```terminal
$ npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config@0.4.3
Ok to proceed? (y) 
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · node
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard-with-typescript
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-standard-with-typescript@latest
The config that you've selected requires the following dependencies:

eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^5.43.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 typescript@*
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
Installing eslint-config-standard-with-typescript@latest, @typescript-eslint/eslint-plugin@^5.43.0, eslint@^8.0.1, eslint-plugin-import@^2.25.2, eslint-plugin-n@^15.0.0, eslint-plugin-promise@^6.0.0, typescript@*

added 114 packages, and audited 669 packages in 8s

122 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Successfully created .eslintrc.json file in /home/svasilovski/Documents/projects/MERN/code-verifier-backend
$
```

## iniciar la configuracion de jest
```terminal
$ npx jest --init

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes

✏️  Modified /home/svasilovski/Documents/projects/MERN/code-verifier-backend/package.json

📝  Configuration file created at /home/svasilovski/Documents/projects/MERN/code-verifier-backend/jest.config.ts
$ 
```
crear la carpeta __test__ y agregar el test de prueba example.spec.ts

Instalar ts-node para poder ejecutar los test unitarios.
```terminal
$ npm i -D ts-node
```

Ejecutamos el test

```terminal
$ npm run test

> code-verifier-backend@1.0.0 test
> jest

 PASS  __test__/example.spec.ts
  My first Test Suite
    ✓ My first Test Case (4 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.676 s
Ran all test suites.
$
```

## Instalamos un servidor 

Esto lo usamos para ejecutar el codigo compialdo

```terminal
$ npm i -D serve
```
Ejecuta los test, luegoingresa a la capeta de reportes y por ultimo ejecuta un servidor web.
```terminal
$ npm run test && cd coverage/lcov-report && npx serve 
```

# Creamos un .gitignore
ingresamos a gitignore.io y seteamos
- Node
- VisualStudio Code



