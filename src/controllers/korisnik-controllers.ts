import { Request, Response } from 'express';
import { KorisnikRepository } from './../repositories/korisnik-repository';
import { Korisnik } from './../models/korisnik-model';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import passport from 'passport';

export const getAllKorisnici = (req: Request, res: Response) => {
    let korisnikRepository: KorisnikRepository = new KorisnikRepository();
    korisnikRepository.getAllKorisnici().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const getKorisnikByID = (req: Request, res: Response) => {
    let korisnikRepository: KorisnikRepository = new KorisnikRepository();
    korisnikRepository.getKorisnikByID(+req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const insertKorisnik = (req: Request, res: Response) => {
    let korisnik: Korisnik = Object.create(req.body);
    let korisnikRepository: KorisnikRepository = new KorisnikRepository();
    korisnikRepository.insertKorisnik(korisnik).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const updateKorisnik = (req: Request, res: Response) => {
    // let korisnik: Korisnik = Object.create(req.body);
    let korisnik: Korisnik = new Korisnik();
    korisnik.id = req.body.id;
    korisnik.ime = req.body.ime;
    korisnik.prezime = req.body.prezime;
    korisnik.godRodjenja = req.body.godRodjenja;
    korisnik.adresa = req.body.adresa;
    korisnik.telefon = req.body.telefon;
    korisnik.username = req.body.username;
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (req.body.password) {
        korisnik.hashedPassword = crypto.pbkdf2Sync(req.body.password, 'SALT', 1000, 64, 'SHA512').toString('hex');
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // korisnik.hashedPassword = crypto.pbkdf2Sync(req.body.password, 'SALT', 1000, 64, 'SHA512').toString('hex');
    korisnik.isAdmin = req.body.isAdmin;
    let korisnikRepository: KorisnikRepository = new KorisnikRepository();
    korisnikRepository.updateKorisnik(korisnik).then(data => {
        res.send({
            status: 0,
            data: null
        });
    }).catch(err => {
        res.send({
            status: -1,
            data: null
        });
    });
};

export const deleteKorisnik = (req: Request, res: Response) => {
    let korisnikRepository: KorisnikRepository = new KorisnikRepository();
    korisnikRepository.deleteKorisnik(+req.params.id).then(data => {
        res.send({
            status: 0,
            data: data
        });
    }).catch(err => {
        res.send({
            status: -1,
            data: err
        });
    });
};

export const register = (request: Request, response: Response) => {
    let korisnik: Korisnik = new Korisnik();
    let korisnikRepository: KorisnikRepository = new KorisnikRepository();

    korisnik.ime = request.body.ime;
    korisnik.prezime = request.body.prezime;
    korisnik.godRodjenja = request.body.godRodjenja;
    korisnik.adresa = request.body.adresa;
    korisnik.telefon = request.body.telefon;
    korisnik.username = request.body.username;
    korisnik.hashedPassword = crypto.pbkdf2Sync(request.body.password, 
                                                'SALT', 
                                                1000, 
                                                64, 
                                                'SHA512').toString('hex');
    korisnik.isAdmin = 0;
    
    korisnikRepository.insertKorisnik(korisnik).then(data => {

        let expiry = new Date();
        expiry.setDate(expiry.getDate() + 1);

        let token = jwt.sign({
            id: data.identifiers[0].id, // dodato '.id', u odnosu na predavanja. Sad vraca broj, a prije je - objekat.
            username: request.body.username,
            isAdmin: 0,
            expiry: expiry
        }, 'SECRET');

        response.send({
            status: 0,
            token // token: token
        });

    }).catch((err) => {
        response.send({
            status: -1,
            error: err // Stajalo je data: err
        });
    });
};

export const login = (request: Request, response: Response) => {
    passport.authenticate('custom', (error, user) => {
        if (error) {
            response.send({
                status: -1,
                error // error: error
            });
        }
        else {
            let expiry = new Date();
            expiry.setDate(expiry.getDate() + 1);

            let token = jwt.sign({
                id: user.id,
                username: user.username,
                isAdmin: user.isAdmin,
                expiry: expiry
            }, 'SECRET');

            response.send({
                status: 0,
                token // token: token
            });
        }
    })(request, response);
};

export const checkPasswrd = (req: Request, res: Response) => {
    let korisnikRepository: KorisnikRepository = new KorisnikRepository();
    korisnikRepository.getKorisnikByID(req.body.id).then(data => {
        let hash = crypto.pbkdf2Sync(req.body.password, 'SALT', 1000, 64, 'SHA512').toString('hex');
        if (hash.toLocaleLowerCase() === data.hashedPassword.toLowerCase()) {
            res.send({
                status: 0,
                data: null
            });
        }
        else {
            res.send({
                status: 1,
                data: null
            });
        }
    }).catch(err => {
        res.send({
            status: -1,
            data: null
        });
    });
};

export const getKorisnikByUsername = (req: Request, res: Response) => {
    let korisnikRepository: KorisnikRepository = new KorisnikRepository();
    korisnikRepository.getKorisnikByUsername(req.params.uname).then(data => {
        if (data) {
            res.send({
                status: 0,
                data: null
            });
        }
        else {
            res.send({
                status: -2,
                data: data
            });
        }
    }).catch(err => {
        res.send({
            status: -1,
            data: err
        });
    });
};