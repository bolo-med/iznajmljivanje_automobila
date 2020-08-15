import { getManager } from 'typeorm';
import { Automobil } from './../models/automobil-model';

export class AutomobilRepository {

    getAllAutomobili = () => {
        return getManager().getRepository(Automobil).find({ relations: ['proizvodjac', 'model', 'status'] });
    };

    getAutomobilByID = (id: number) => {
        return getManager().getRepository(Automobil).findOne(id, { relations: ['proizvodjac', 'model', 'status', 'rezervacije'] });
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

