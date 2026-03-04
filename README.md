# server-web.js
Instalacion nesesaria previa es node js, Vs Code, Git, Git bash,
para crear este server realizamos los siguiente pasos:
1.- crear una carpeta para el proyecto
2.- dentro se abre una terminal git bash 
introdicimos el codigo npm init
rellenamos todos los campos que tendremos en el servidor dentro del documento package.json
3.- precionamos code . para abrir la carpeta del proyecto dentro de vs code
4.- instalaremos las dependencias desde el perfil de git bash en la terminal 
5.- usamos npm i express para instalarlo y asi crear una instancia posteriormente, verificamos que la dependencia se agrege a nuestro proyecto, sino la agregamos manualmente.
6.- cobre la cabecera de nuestro proyecto agregaremos un nuevo archivo llamado index.js que sera nuestra pagina principal para nuestro servidor.
7.- creamos costantes de express, de app en funcion de express, de PORT y par configurar el server para que escuche(analice) atravez del puerto definimos el app.listen
8.- para ejecutar el servidor ejecutamos desde la terminal de git bash el codigo node index.js y se crea la instancia para nuestro servidor dentro de nuestro navegaro web que tengamos como predeterminado dentro de nuestra pc.
9.- mediante el METODO GET creamos una ruta raiz para mostrar la pagina principal de nuestro servidor " Hola Mundo".
10.el metodo get recive un request ( lo que necesita) y un respont (lo que envia de respuesta)
11.- para actualizar la pagina inicial debemos reiniciar el server. si queremos evitar estar reiniciando de manera manual tenemos que instalar nodemon
12.- definimos start dentro del package.json
y  le decimos que ejecute el node index.js.
13.- instalamos nodemon desde la terminal de git bash con el comando npm i -D nodemon como una dependencia de desarrollo y no de entorno. IMPORTANTE verificar que se agrege al documento.
14.- para ejecutar el nodemon debemos ejecutar dentro de git bash el siguiente comendo npm run dev para correr el scrip de inicio de nodemon y con eso encender y apagar el server de manera automatica una vez iniciado cada que se guarde un archivo del proyecto.
15.- para detener el servido se preciona la tecla CTRL + c para detener el servidor.
