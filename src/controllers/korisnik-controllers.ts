import { Request, Response } from 'express';
import { KorisnikRepository } from './../repositories/korisnik-repository';
import { Korisnik } from './../models/korisnik-model';

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
    let korisnikRepository: KorisnikRepository = new KorisnikRepository();
    korisnikRepository.updateKorisnik(korisnik).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const deleteKorisnik = (req: Request, res: Response) => {
    let korisnikRepository: KorisnikRepository = new KorisnikRepository();
    korisnikRepository.deleteKorisnik(+req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

