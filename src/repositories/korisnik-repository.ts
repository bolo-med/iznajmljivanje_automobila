import { getManager } from 'typeorm';
import { Korisnik } from './../models/korisnik-model';

export class KorisnikRepository {

    getAllKorisnici = () => {
        return getManager().getRepository(Korisnik).find();
    };

    getKorisnikByID = (id: number) => {
        return getManager().getRepository(Korisnik).findOne(id, { relations: ['rezervacije'] });
    };

    insertKorisnik = (korisnik: Korisnik) => {
        return getManager().getRepository(Korisnik).insert(korisnik);
    };

    updateKorisnik = (korisnik: Korisnik) => {
        return getManager().getRepository(Korisnik).save(korisnik);
    };

    deleteKorisnik = (id: number) => {
        return getManager().getRepository(Korisnik).delete(id);
    };

    getKorisnikByUsername = (username: string) => {
        return getManager().getRepository(Korisnik).findOne({
            where: {
                'username': username
            }
        });
    };

}

