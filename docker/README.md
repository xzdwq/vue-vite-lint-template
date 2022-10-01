#### Из корня приложения

#### Docker build

- `docker build -f docker/production/Dockerfile -t vue-xzdwq:latest .`
- Результат: созданный контейнер vue-xzdwq.

#### Docker run

- `docker run -d -p 80:4444 --rm --name vue-xzdwq vue-xzdwq:latest` - без погружения
- `docker run -it -p 80:4444 --rm --name vue-xzdwq vue-xzdwq:latest` - интерактивный с погружением

#### Docker stop

- `docker stop vue-xzdwq`

#### Docker cmd

- `docker images` - просмотр имеющихся образов
- `docker ps` - просмотр запущенных контейнеров
- `docker ps -a` - просмотр всех контейнеров
- `docker rm <container_id | container_name>` - удалить конкретный контейнер или группу контейнеров (список id или name
  через пробел)
- `docker container prune` - удалить все остановленные контейнеры
- `docker rmi <image_name | image_id>` - удалить конкретный образ
- `docker rmi $(docker images -a -q)` - удалить все образы
- `docker image prune` - удалить все неиспользуемые образы
- `docker volume ls` - просмотр связанных зависимостей
- `docker volume rm <volume-name>` - удалить связанную зависимость
- `docker volume rm $(docker volume ls -q)` - удалить все зависимости
