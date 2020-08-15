import express from 'express';
import * as korisnikControllers from './../controllers/korisnik-controllers';
import expressjwt from 'express-jwt';

const korisnikRouter = express.Router();

let auth = expressjwt({
    secret: 'SECRET',
    userProperty: 'body.userData',
    algorithms: ['HS256']
});

korisnikRouter.route('/korisnici').get(korisnikControllers.getAllKorisnici)
                                  .post(korisnikControllers.insertKorisnik)
                                  .put(korisnikControllers.updateKorisnik);

korisnikRouter.route('/korisnici/:id').get(auth, korisnikControllers.getKorisnikByID)
                                      .delete(korisnikControllers.deleteKorisnik);

korisnikRouter.post('/register', korisnikControllers.register);
korisnikRouter.post('/login', korisnikControllers.login);

export default korisnikRouter;

