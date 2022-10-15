primero nos creamos un nuevo repo y seguimos los pasos

git init
git remote add origin git@github.com...
git add .
git commit -m "initial commit"
git push -u origin master

te pones la libreria 
https://github.com/tschaub/gh-pages
es un cli para subir ficheros y tal 
npm install gh-pages --save-dev


en el package json creamos entonces 

"build:dev": "npm run clean && webpack --config ./config/webpack/dev.js",
    "deploy": "gh-pages -d dist"

 se puede hacer entonces npm run build:dev
 y luego se puede hacer tambien el npm run deploy

 eso crea una segunda rama en github con las cosas para desplegar


desde el bus
ssh-keygen


luego cuando se cree el fichero de despliegue debe petar


se tiene que crear la clave privada y publica
ssh-keygen -m PEM -t rsa -C "cd-user@my-app.com"

donde pone el donde generar la clar se pone ./id_rsa 
todo esto iria al servidor


en el settings de github pongo la ssh publica en el deploy keys
y la privada en el secrets actions


Docker
Para ver las imagenes que tienes arrancadas
docker images 

Descargar imagenes
docker pull <nombreImagen>

Para ver los contenedores
docker ps

para ver todos los que estan activos o parados
docker ps --all

Para crear un contenedor a partir de una imagen
docker run <nombreImagen>

Para ver si un contenedor se ha activado y cuando
docker ps -a

Para ejecutar un contenedor que ya se había ejecutado antes
docker start <IdContenedor> -i    (si haces docker run te habría creado otro nuevo)
Ex: docker start 6b099ce7b3b6 -i


Para borrar un contenedor 
docker container rm <IDContenedor>
docker container rm 6b099ce7b3b6  | docker rm 6b099ce7b3b6

Para borrar todos los contenedores
docker container prune

Para borrar imagenes sobreescritas con el <NONE>
docker image prune


Para borrar imagenes
docker image rm <IdImage>
Ex: docker image rm hello-world:latest | docker rmi hello-world:latest

Para configurar docker
Se crea fichero Dockerfile

tambien se puede crear el .dockerignore
para no poner el tema de github node_modules etc
ex: 
.github
node_modules
dist
.editorconfig
.gitignore
.prettierrc
dev.env
.env
.env.example
README.md


Para crear una imagen 
docker build -t <NombreImg>:1 <RUTA DEL DIRECTORIO>
docker build -t my-app:1 .

Para crear luego el contenedor
docker run --name my-app-container my-app:1

si quiero meterme dentro del contenedor para ver todo  con el -it seria para poder conectarnos ( -it my-app:1 sh)
docker run --name  my-app-container -it my-app:1 sh

si solo quieres arrancar el contenedor
docker run --name my-app-container my-app:1

y si luego de que esta encendido quieres meterte dentro
docker exec -it my-app-container sh

para un contenedor
docker stop my-app-container

Para configurar el puerto para el contenedor, en este caso por defecto lo tenemos en el 8083
docker run --name my-app-container -p 8080:8083 my-app:1

Si no queremos que ocupe el terminal podemos usar el -d
docker run --name my-app-container -d -p 8080:8083 my-app:1

para que cuando se pare el docker se borre el contenedor
docker run --name my-app-container -d --rm -p 8080:8083 my-app:1

docker stop my-app-container  (y se habria borrado)
