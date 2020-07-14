import { getManager } from 'typeorm';
import { Model } from './../models/model-model';

export class ModelRepository {

    getAllModeli = () => {
        return getManager().getRepository(Model).find();
    };

    getModelByID = (id: number) => {
        return getManager().getRepository(Model).findOne(id, { relations: ['automobili'] });
    };

    insertModel = (model: Model) => {
        return getManager().getRepository(Model).insert(model);
    };

    updateModel = (model: Model) => {
        return getManager().getRepository(Model).save(model);
    };

    deleteModel = (id: number) => {
        return getManager().getRepository(Model).delete(id);
    };

}

