import { Request, Response } from 'express';
import { RezervacijaRepository } from './../repositories/rezervacija-repository';
import { Rezervacija } from './../models/rezervacija-model';

export const getAllRezervacije = (req: Request, res: Response) => {
    let rezervacijaRepository: RezervacijaRepository = new RezervacijaRepository();
    rezervacijaRepository.getAllRezervacije().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const getRezervacijaByID = (req: Request, res: Response) => {
    let rezervacijaRepository: RezervacijaRepository = new RezervacijaRepository();
    rezervacijaRepository.getRezervacijaByID(+req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const insertRezervacija = (req: Request, res: Response) => {
    let rezervacija: Rezervacija = Object.create(req.body);
    let rezervacijaRepository: RezervacijaRepository = new RezervacijaRepository();
    rezervacijaRepository.insertRezervacija(rezervacija).then(data => {
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

export const updateRezervacija = (req: Request, res: Response) => {
    // let rezervacija: Rezervacija = Object.create(req.body);
    let rezervacija: Rezervacija = new Rezervacija();
    rezervacija.id = req.body.id;
    rezervacija.korisnikID = req.body.korisnikID;
    rezervacija.automobilID = req.body.automobilID;
    rezervacija.datumPreuzimanja = req.body.datumPreuzimanja;
    rezervacija.datumVracanja = req.body.datumVracanja;
    rezervacija.realizovana = req.body.realizovana;
    // rezervacija.datumStvarnogVracanja = req.body.datumStvarnogVracanja;
    rezervacija.datumStvarnogVracanja = req.body.datumStvarnogVracanjaStr;
    let rezervacijaRepository: RezervacijaRepository = new RezervacijaRepository();
    rezervacijaRepository.updateRezervacija(rezervacija).then(data => {
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

export const deleteRezervacija = (req: Request, res: Response) => {
    let rezervacijaRepository: RezervacijaRepository = new RezervacijaRepository();
    rezervacijaRepository.deleteRezervacija(+req.params.id).then(data => {
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

