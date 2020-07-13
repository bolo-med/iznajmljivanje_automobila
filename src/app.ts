import express from 'express';
import { dbConfig } from './common/config';
import { createConnection } from 'typeorm';
import proizvodjacRouter from './routers/proizvodjac-routers';
import modelRouter from './routers/model-roters';
import bodyParser from 'body-parser';

class App {

    serverApp: express.Application;

    constructor() {
        this.serverApp = express();
        this.config();
        this.connectToDB();
        this.routing();
    }

    private connectToDB() {
        createConnection(dbConfig).then(connection => {
            console.log('Uspjesno povezivanje sa bazom podataka!');
        }).catch(err => {
            console.log('Greska prilikom povezovanja sa bazom podataka!');
        });
    }

    private routing() {
        this.serverApp.use('/proizvodjaci', proizvodjacRouter);
        this.serverApp.use('/modeli', modelRouter);
    }

    private config() {
        this.serverApp.use(bodyParser.json());
    }

}

const serverInstance = new App().serverApp;

export default serverInstance;

