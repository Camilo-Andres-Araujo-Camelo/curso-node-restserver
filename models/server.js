const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'; // esto es para indicarle a la persona externa vea cuales son las rutas que dispone el servidor
        // Middlewares
        this.middlewares();

        // RUtas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() ); // permite hacer peticiones a todo el mundo 🌐

        // Lectura y parseo del body
        // Con esto, cualquier información que venga de post, put o delete la va a intentar serializar a un formato json
        // Si no se usa este middleware nuestra app no puede leer lo que le envíen en el body de un post, put o delete, ya que no se convierte a json
        this.app.use( express.json() );

        // Directorio público
        this.app.use( express.static('public') );
        
    }

    routes() {
        this.app.use( this.usersPath, require('../routes/user' ))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando desde el puerto ${this.port}` )
        });
    }

}


module.exports = Server;