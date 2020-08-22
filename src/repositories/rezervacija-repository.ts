import { getManager } from 'typeorm';
import { Rezervacija } from './../models/rezervacija-model';

export class RezervacijaRepository {

    getAllRezervacije = () => {
        return getManager().getRepository(Rezervacija).find({ relations: ['automobil', 
                                                                          'automobil.proizvodjac', 
                                                                          'automobil.model', 
                                                                          'automobil.status', 
                                                                          'korisnik'] });
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

    // getRezervacijeByAutomobilID = (id: number): Promise<Rezervacija[]> => {
    //     // return getManager().query(`SELECT * FROM rezervacije WHERE automobil_id = ?`, [id]); // sa predavanja

    //     return getManager().getRepository(Rezervacija)
    //                        .query("SELECT * FROM rezervacije WHERE automobil_id = ?", [id]);
    // }; // Ne moze. Vraca sirov rezultat iz baze - ne moze da se prebaci u niz tipa Rezervacije.

}

