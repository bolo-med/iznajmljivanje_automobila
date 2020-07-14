import { Request, Response } from 'express';
import { AutomobilRepository } from './../repositories/automobil-repository';
import { Automobil } from './../models/automobil-model';

export const getAllAutomobili = (req: Request, res: Response) => {
    let automobilRepository: AutomobilRepository = new AutomobilRepository();
    automobilRepository.getAllAutomobili().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const getAutomobilByID = (req: Request, res: Response) => {
    let automobilRepository: AutomobilRepository = new AutomobilRepository();
    automobilRepository.getAutomobilByID(+req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const insertAutomobil = (req: Request, res: Response) => {
    let automobil: Automobil = Object.create(req.body);
    let automobilRepository: AutomobilRepository = new AutomobilRepository();
    automobilRepository.insertAutomobil(automobil).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const updateAutomobil = (req: Request, res: Response) => {
    let automobil: Automobil = Object.create(req.body);
    let automobilRepository: AutomobilRepository = new AutomobilRepository();
    automobilRepository.updateAutomobil(automobil).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const deleteAutomobil = (req: Request, res: Response) => {
    let automobilRepository: AutomobilRepository = new AutomobilRepository();
    automobilRepository.deleteAutomobil(+req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

