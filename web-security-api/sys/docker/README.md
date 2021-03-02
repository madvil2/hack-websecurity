Dev environment with docker
## Requirements
- Installed composer
- Installed docker (https://docs.docker.com/engine/install/)
- Installed docker compose (https://docs.docker.com/compose/install/). Check docker-compose --version

## Up & Running
1. add 127.0.0.1 api.security.test to hosts file
2. set project .env file 
3. change DB_HOST to mysql
4. cd sys/docker
5. docker-compose down && docker-compose up -d
6. open the page the browser at https://api.security.test

The following are built for our web app, with their exposed ports detailed:
- nginx - :8080, :443
- mysql - :33306
- php - :9000

## Additions

Three additional containers are included that handle Composer, NPM, and Artisan commands without having to have these platforms installed on your local computer. Use the following command examples from your project root, modifying them to fit your particular use case.
Examples of how to run commands from relevant containers:
- docker-compose run --rm composer install
- docker-compose run --rm yarn install
- docker-compose run --rm yarn build
- docker-compose run --rm artisan migrate
 