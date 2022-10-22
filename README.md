# dockerfiles_hub
en este repositorio guardo todo las versiones de los docker que he contruido para el canal de cultura devops https://www.youtube.com/channel/UCfJ67eVA7DkKbbIF5ceJDMA


vamos con unos comandos que te ayudaran

eliminar todo los docker images sin tags
docker rmi $(docker images | grep "<none>" | awk '{print $3}')
eliminar todo los docker images
docker rmi $(docker images | awk '{print $3}')


eliminar todo los containers
docker ps -q -a | xargs docker rm



# Mis Libros:

[![libros futuro es devops ](https://github.com/culturadevops/ecs_para_principiantes/blob/master/recursos/futuroesdevopsjaivicvillegas.png)](https://amzn.to/3S8AGG9) [![libros herramientas devops](https://github.com/culturadevops/ecs_para_principiantes/blob/master/recursos/herramientasdevops.png)](https://amzn.to/3ga1c4E)

# Mi canal de cultura Devops

[![canal de youtube sobre devops ](https://github.com/culturadevops/ecs_para_principiantes/blob/master/recursos/culturadevops.png)](https://www.youtube.com/channel/UCfJ67eVA7DkKbbIF5ceJDMA?sub_confirmation=1) 