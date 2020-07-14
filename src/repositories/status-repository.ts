import { getManager } from "typeorm";
import { Status } from './../models/status-model';

export class StatusRepository {

    getAllStatusi = () => {
        return getManager().getRepository(Status).find();
    };

    getStatusByID = (id: number) => {
        return getManager().getRepository(Status).findOne(id, { relations: ['automobili'] });
    };

    insertStatus = (status: Status) => {
        return getManager().getRepository(Status).insert(status);
    };

    updateStatus = (status: Status) => {
        return getManager().getRepository(Status).save(status);
    };

    deleteStatus = (id: number) => {
        return getManager().getRepository(Status).delete(id);
    };

}

