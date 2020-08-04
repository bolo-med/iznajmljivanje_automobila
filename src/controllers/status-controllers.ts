import { Request, Response } from 'express';
import { StatusRepository } from './../repositories/status-repository';
import { Status } from './../models/status-model';

export const getAllStatusi = (req: Request, res: Response) => {
    let statusRepository: StatusRepository = new StatusRepository();
    statusRepository.getAllStatusi().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const getStatusByID = (req: Request, res: Response) => {
    let statusRepository: StatusRepository = new StatusRepository();
    statusRepository.getStatusByID(+req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const insretStatus = (req: Request, res: Response) => {
    let status1: Status = Object.create(req.body);
    let statusRepository: StatusRepository = new StatusRepository();
    statusRepository.insertStatus(status1).then(data => {
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

export const updateStatus = (req: Request, res: Response) => {
    // let status: Status = Object.create(req.body);
    let status: Status = new Status();
    status.id = req.body.id;
    status.tip = req.body.tip;
    let statusRepository: StatusRepository = new StatusRepository();
    statusRepository.updateStatus(status).then(data => {
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

export const deleteStatus = (req: Request, res: Response) => {
    let statusRepository: StatusRepository = new StatusRepository();
    statusRepository.deleteStatus(+req.params.id).then(data => {
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

