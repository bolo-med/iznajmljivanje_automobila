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
import passport from 'passport';
import passportCustom from 'passport-custom';
import { KorisnikRepository } from './repositories/korisnik-repository';
import crypto from 'crypto';
import expressjwt from 'express-jwt';

class App {

    serverApp: express.Application;

    constructor() {
        this.serverApp = express();
        this.config();
        this.connectToDB();
        this.authConfig();
        this.routing();
    }

    private connectToDB() {
        createConnection(dbConfig).then(connection => {
            console.log('Uspjesno povezivanje sa bazom podataka!');
        }).catch(err => {
            console.log('Greska prilikom povezovanja sa bazom podataka!');
        });
    }

    private authConfig() {

        passport.use('custom', new passportCustom.Strategy((request, done) => {
            let korisnikRepository = new KorisnikRepository();
            korisnikRepository.getKorisnikByUsername(request.body.username).then(data => {
                let hash = crypto.pbkdf2Sync(request.body.password, 
                                             'SALT', 
                                             1000, 
                                             64, 
                                             'SHA512').toString('hex');

                if (hash.toLowerCase() === data.hashedPassword.toLowerCase()) {
                    done(null, data);
                }
                else {
                    done('Pogresni kredencijali!');
                }
            }).catch(err => {
                done(err);
            });
        }));

        this.serverApp.use(passport.initialize());
    }

    private routing() {

        let auth = expressjwt({
            secret: 'SECRET',
            userProperty: 'body.userData',
            algorithms: ['HS256']
        });

        this.serverApp.use('/proizvodjaci', proizvodjacRouter);
        this.serverApp.use('/modeli', modelRouter);
        this.serverApp.use('/statusi', statusRouter);
        this.serverApp.use('', korisnikRouter);
        this.serverApp.use('/automobili', automobilRouter);
        this.serverApp.use('/rezervacije', auth, rezervacijaRouter);
        this.serverApp.use('/upload', uploadRouter);
    }

    private config() {
        this.serverApp.use(bodyParser.json());
        this.serverApp.use(express.static(path.join(__dirname, 'public/uploads')));

        // middleware
        this.serverApp.use((request: Request, response: Response, next) => {
            response.header('Access-Control-Allow-Origin', 'http://localhost:4200');
            response.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin, Authorization');
            response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            // response.setHeader("Access-Control-Allow-Credentials", "true"); // sa interneta
            response.header("Access-Control-Allow-Credentials", "true"); // radi i ovako

            next();
        });
    }

}

const serverInstance = new App().serverApp;

export default serverInstance;

