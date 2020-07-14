import { getManager } from 'typeorm';
import { Automobil } from './../models/automobil-model';

export class AutomobilRepository {

    getAllAutomobili = () => {
        return getManager().getRepository(Automobil).find();
    };

    getAutomobilByID = (id: number) => {
        return getManager().getRepository(Automobil).findOne(id, { relations: ['rezervacije'] });
    };

    insertAutomobil = (automobil: Automobil) => {
        return getManager().getRepository(Automobil).insert(automobil);
    };

    updateAutomobil = (automobil: Automobil) => {
        return getManager().getRepository(Automobil).save(automobil);
    };

    deleteAutomobil = (id: number) => {
        return getManager().getRepository(Automobil).delete(id);
    };

}

