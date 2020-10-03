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