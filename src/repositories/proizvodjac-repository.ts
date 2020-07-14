import { getManager } from "typeorm";
import { Proizvodjac } from './../models/proizvodjac-model';

export class ProizvodjacRepository {

    getAllProizvodjaci = () => {
        return getManager().getRepository(Proizvodjac).find();
    };

    getProizvodjacByID = (id: number) => {
        return getManager().getRepository(Proizvodjac).findOne(id, { relations: ['automobili'] });
    };

    insertProizvodjac = (proizvodjac: Proizvodjac) => {
        return getManager().getRepository(Proizvodjac).insert(proizvodjac);
    };

    updateProizvodjac = (proizvodjac: Proizvodjac) => {
        return getManager().getRepository(Proizvodjac).save(proizvodjac);
    };

    deleteProizvodjac = (id: number) => {
        return getManager().getRepository(Proizvodjac).delete(id);
    };

}

