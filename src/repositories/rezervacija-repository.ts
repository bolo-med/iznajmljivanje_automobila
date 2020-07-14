import { getManager } from 'typeorm';
import { Rezervacija } from './../models/rezervacija-model';

export class RezervacijaRepository {

    getAllRezervacije = () => {
        return getManager().getRepository(Rezervacija).find();
    };

    getRezervacijaByID = (id: number) => {
        return getManager().getRepository(Rezervacija).findOne(id);
    };

    insertRezervacija = (rezervacija: Rezervacija) => {
        return getManager().getRepository(Rezervacija).insert(rezervacija);
    };

    updateRezervacija = (rezervacija: Rezervacija) => {
        return getManager().getRepository(Rezervacija).save(rezervacija);
    };

    deleteRezervacija = (id: number) => {
        return getManager().getRepository(Rezervacija).delete(id);
    };

}

