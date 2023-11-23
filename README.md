# EcoSanFco
Proyecto para que los vecinos de San Francisco puedan subir reclamos referidos a cuidado del medio ambiente, como reclamo por basural a cielo abierto, basura tirada en calles, incendios, etc

![EcoSanFco logo](./ecosanfcologo.png)

## Configurar el proyecto localmente
1. Dirijase a la carpeta donde quiere clonar el proyecto y ejecute el comando `git clone https://github.com/PatricioPoncini/EcoSanFco.git`

2. Una vez clonado el repositorio ejecute `cd EcoSanFco` para entrar a la carpeta del proyecto

3. Ejecute `npm i` para instalar todas las dependencias

4. Cree un archivo `.env` en la carpeta raíz del proyecto y configurelo con sus variables de entorno

```
MONGO_URI=              // connection string de mongodb
TOKEN_KEY=              // key para jwt
OPTION_TOKEN_KEY=       // optional key para jwt
```

5. Una vez que esté todo el proyecto configurado, ejecute el comando `npm run dev` para poder correr el proyecto localmente. El server estará escuchando en el puerto `1110`