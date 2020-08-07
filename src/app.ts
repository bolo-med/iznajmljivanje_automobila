import express from 'express';
import { dbConfig } from './common/config';
import { createConnection } from 'typeorm';
import proizvodjacRouter from './routers/proizvodjac-routers';
import modelRouter from './routers/model-roters';
import statusRouter from './routers/status-routers';
import korisnikRouter from './routers/korisnik-routers';
import automobilRouter from './routers/automobil-routers';
import rezervacijaRouter from './routers/rezervacija-routers';
import uploadRouter from './common/file-upload';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import path from 'path';

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
        this.serverApp.use('/statusi', statusRouter);
        this.serverApp.use('/korisnici', korisnikRouter);
        this.serverApp.use('/automobili', automobilRouter);
        this.serverApp.use('/rezervacije', rezervacijaRouter);
        this.serverApp.use('/upload', uploadRouter);
    }

    private config() {
        this.serverApp.use(bodyParser.json());
        this.serverApp.use(express.static(path.join(__dirname, 'public/uploads')));

        // middleware
        this.serverApp.use((request: Request, response: Response, next) => {
            response.header('Access-Control-Allow-Origin', 'http://localhost:4200');
            response.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
            response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            // response.setHeader("Access-Control-Allow-Credentials", "true"); // sa interneta
            response.header("Access-Control-Allow-Credentials", "true"); // radi i ovako

            next();
        });
    }

}

const serverInstance = new App().serverApp;

export default serverInstance;

