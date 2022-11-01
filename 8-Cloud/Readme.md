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


Para subir a docker-hub
primero hacemos un docker login
docker push 29202625/my-app:2

si hacemos cambios y queremos actualizar la imagen, solo con hacer una nueva build esta 
docker build -t <user-name>/my-app:3 .



Para cambiar el nombre de la imagen
docker tag my-app:2 <user-name>/<app-name>


para ejecutar un contenedor del docker hub
docker run --name my-app-container --rm -d -p 8080:8083 franlopez7/my-app:1



Para desplegar el codigo en el servidor como heroku
Preparamos github

git init
git remote add origin git@github.com...
git add .
git commit -m "initial commit"
git push -u origin main


te vas a heroku y creas una nueva app
en la consola debes logarte y tener token con heroku
heroku authorizations:create -d <NOMBRE_REPO>

no se añade el token directamente
se crea un secreto de githup
github/settting/secrets



Para desplegar en vercel
lo primero es instalarlo 
npm i -g vercel



y luego en el workflow de github
env:
  HEROKU_API_KEY: ${{secrets.HEROKU_API_KEY}}

para poder pillar las imagenes de heroku
IMAGE_NAME: registry.heroku.com/<app-name>/web


luego tendriamos algo como 

name: Continuos Deployment workflow

on:
  push:
    branches:
      - master
env:
  HEROKU_API_KEY: ${{secrets.HEROKU_API_KEY}}
  IMAGE_NAME: registry.heroku.com/${{secrets.HEROKU_APP_NAME}}/web

jobs:
  cd:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Heroku login
        run: heroku container:login
      - name: Build docker image
        run: docker build -t ${{env.IMAGE_NAME}} .
      - name: Deploy docker image
        run: docker push ${{env.IMAGE_NAME}}
      - name: Release
        run: heroku container:release web -a ${{secrets.HEROKU_APP_NAME}}


 si quieres ver los logs de heroku
 heroku logs -a deploy-heroku-auto



 En un servidor linux de amazon para utilizar el gestor de paquetes de la distribción que tienen
 sudo yum update -y
sudo amazon-linux-extras install docker
sudo service docker start

se hace luego login 
vercel login

luego debemos linkar el codigo
vercel link  poner luego el nombre del proyecto

con eso se crea un .vercel en el folder

luego se crean 3 variables secretas en github con las variables de .vercel