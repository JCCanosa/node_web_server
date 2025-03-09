// const { envs } = require('./config/env');
import { envs } from './config/env.js';

// const { startServer } = require('./server/server')
import { startServer } from './server/server.js'

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    });
}

//Funcion agnostiaca autoconvocada, no tiene nombre y se autoejecuta con los () del final
(async () => {
    main()
})()


