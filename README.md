# dockerfiles_hub
en este repositorio guardo todo las versiones de los docker que he contruido para el canal de cultura devops https://www.youtube.com/channel/UCfJ67eVA7DkKbbIF5ceJDMA



vamos con unos comandos que te ayudaran

eliminar todo los docker images sin tags
docker rmi $(docker images | grep "<none>" | awk '{print $3}')
eliminar todo los docker images
docker rmi $(docker images | awk '{print $3}')


eliminar todo los containers
docker ps -q -a | xargs docker rm