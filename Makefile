build:
  docker build -f docker/production/Dockerfile -t vue-xzdwq:latest .
run:
  docker run -d -p 80:4444 --rm --name vue-xzdwq vue-xzdwq:latest
run-dev:
  docker run -d -p 80:4444 -v ${PWD}:/var/www/app -v nodemodules:/app/node_modules --rm --name vue-xzdwq vue-xzdwq:latest
stop:
  docker stop vue-xzdwq
