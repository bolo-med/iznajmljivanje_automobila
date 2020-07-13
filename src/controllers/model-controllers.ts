import { Request, Response } from 'express';
import { ModelRepository } from '../repositories/model-repository';
import { Model } from '../models/model-model';

export const getAllModeli = (req: Request, res: Response) => {
    let modelRepository: ModelRepository = new ModelRepository();
    modelRepository.getAllModeli().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const getModelByID = (req: Request, res: Response) => {
    let modelRepository: ModelRepository = new ModelRepository();
    modelRepository.getModelByID(+req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const insertModel = (req: Request, res: Response) => {
    let model: Model = Object.create(req.body);
    let modelRepository: ModelRepository = new ModelRepository();
    modelRepository.insertModel(model).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const updateModel = (req: Request, res: Response) => {
    let model: Model = Object.create(req.body);
    let modelRepository: ModelRepository = new ModelRepository();
    modelRepository.updateModel(model).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const deleteModel = (req: Request, res: Response) => {
    let modelRepository: ModelRepository = new ModelRepository();
    modelRepository.deleteModel(+req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};
