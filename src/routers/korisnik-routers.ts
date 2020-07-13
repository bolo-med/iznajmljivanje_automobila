import express from 'express';
import * as korisnikControllers from './../controllers/korisnik-controllers';

const korisnikRouter = express.Router();

korisnikRouter.route('').get(korisnikControllers.getAllKorisnici)
                        .post(korisnikControllers.insertKorisnik)
                        .put(korisnikControllers.updateKorisnik);

korisnikRouter.route('/:id').get(korisnikControllers.getKorisnikByID)
                            .delete(korisnikControllers.deleteKorisnik);

export default korisnikRouter;

