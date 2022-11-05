Leeme

esta imagen esta creada para proyectos sprint 

la idea de este docker es crear un ambiente para tu app asi que encesita solo copiar el app luedo de ser compilado
tu jar deberia estar en la carpeta target y deberia tener un nombre similar al que has colocado dentro del pom.xml


debes modificar el nombre del jar dentro del docker  y pasarle el ambiente en el setup.sh
sino tienes ambientes modifica el setup con tu comando de ejecucion para que puedas levantar tu app

recuerda modificar tambien el puerto del docker igualandolo al que has configurado en el archivo propierties 

Nota pon el archivo dockerfile y el setup.sh en la raiz del proyecto 
IMPORTANTE:recuerda configurar la ruta de tu "jar"


si tienes problemas con la version del openjdk cambiala


# Mis Libros:

[![libros futuro es devops ](https://github.com/culturadevops/recursos/blob/master/portada-futuro-es-devops.png)](https://amzn.to/3S8AGG9) [![libros herramientas devops](https://github.com/culturadevops/recursos/blob/master/portada-herramientasdevops.png)](https://amzn.to/3ga1c4E)

# Mi canal de cultura Devops

[![canal de youtube sobre devops ](https://github.com/culturadevops/recursos/blob/master/logo-culturadevops.png)](https://www.youtube.com/channel/UCfJ67eVA7DkKbbIF5ceJDMA?sub_confirmation=1) 
