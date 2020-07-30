import { Request, Response } from 'express';
import { ProizvodjacRepository } from './../repositories/proizvodjac-repository'
import { Proizvodjac } from '../models/proizvodjac-model';

export const getAllProizvodjaci = (req: Request, res: Response) => {
    let proizvodjacRepository: ProizvodjacRepository = new ProizvodjacRepository();
    proizvodjacRepository.getAllProizvodjaci().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const getProizvodjacByID = (req: Request, res: Response) => {
    let proizvodjacRepository: ProizvodjacRepository = new ProizvodjacRepository();
    proizvodjacRepository.getProizvodjacByID(+req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const insertProizvodjac = (req: Request, res: Response) => {
    let proizvodjac: Proizvodjac = Object.create(req.body);
    let proizvodjacRepository: ProizvodjacRepository = new ProizvodjacRepository();
    proizvodjacRepository.insertProizvodjac(proizvodjac).then(data => {
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

export const updateProizvodjac = (req: Request, res: Response) => {
    // let proizvodjac: Proizvodjac = Object.create(req.body);
    let proizvodjac: Proizvodjac = new Proizvodjac();
    proizvodjac.id = req.body.id;
    proizvodjac.naziv = req.body.naziv;
    let proizvodjacRepository: ProizvodjacRepository = new ProizvodjacRepository();
    proizvodjacRepository.updateProizvodjac(proizvodjac).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const deleteProizvodjac = (req: Request, res: Response) => {
    let proizvodjacRepository: ProizvodjacRepository = new ProizvodjacRepository();
    proizvodjacRepository.deleteProizvodjac(+req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

