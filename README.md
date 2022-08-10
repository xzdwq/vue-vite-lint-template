### Требования

`npm i -g husky` `npm i -g lint-staged`

### Установка

`git clone <url> -b <branch-name>` `npm i && npm run prepare`

### Docker

Docker использует nginx, поэтому если необходимо изменить порт который будет слушать Docker в nginx, то:

- Необходимо поправить порт в `nginx.conf` (`server.listen <port>`) на необходимый;
- Поправить порт в `Dockerfile` (`ENV PORT <port>`) на необходимый;
- Поправить порт в `docker-compose.yml` на необходимый;

#### Docker compose dev (hot reload)

`docker-compose -f docker-compose.dev.yml up --build` - старт (`http://localhost:80`) `docker-compose down` - стоп

#### Docker compose

`docker-compose up --build -d` - старт (`http://localhost:80`) `docker-compose down` - стоп

#### Docker build

`docker build -t vue-xzdwq:latest .` Результат: созданный контейнер vue-xzdwq.

#### Docker run

`docker run -d -p 80:4444 --rm --name vue-xzdwq vue-xzdwq:latest` - без погружения
`docker run -it -p 80:4444 --rm --name vue-xzdwq vue-xzdwq:latest` - интерактивный с погружением

#### Docker stop

`docker stop vue-xzdwq`

#### Docker cmd

`docker images` - просмотр имеющихся образов `docker ps` - просмотр запущенных контейнеров `docker ps -a` - просмотр
всех контейнеров `docker rm <container_id | container_name>` - удалить конкретный контейнер или группу контейнеров
(список id или name через пробел) `docker container prune` - удалить все остановленные контейнеры
`docker rmi <image_name | image_id>` - удалить конкретный образ `docker rmi $(docker images -a -q)` - удалить все образы
`docker image prune` - удалить все неиспользуемые образы `docker volume ls` - просмотр связанных зависимостей
`docker volume rm <volume-name>` - удалить связанную зависимость `docker volume rm $(docker volume ls -q)` - удалить все
зависимости

### История инициализации

`npm create vite@latest vue-xzdwq -- --template vue-ts` `npx husky add .husky/pre-commit "npx lint-staged"`
