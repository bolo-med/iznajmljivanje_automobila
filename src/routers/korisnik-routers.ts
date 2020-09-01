import express from 'express';
import * as korisnikControllers from './../controllers/korisnik-controllers';
import expressjwt from 'express-jwt';

const korisnikRouter = express.Router();

let auth = expressjwt({
    secret: 'SECRET',
    userProperty: 'body.userData',
    algorithms: ['HS256']
});

korisnikRouter.route('/korisnici').get(auth, korisnikControllers.getAllKorisnici)
                                  .post(auth, korisnikControllers.insertKorisnik)
                                  .put(auth, korisnikControllers.updateKorisnik);

korisnikRouter.route('/korisnici/:id').get(auth, korisnikControllers.getKorisnikByID)
                                      .delete(auth, korisnikControllers.deleteKorisnik);

korisnikRouter.post('/register', korisnikControllers.register);
korisnikRouter.post('/login', korisnikControllers.login);

korisnikRouter.get('/korisnici/username/:uname', korisnikControllers.getKorisnikByUsername);

korisnikRouter.post('/pass-usr', auth, korisnikControllers.checkPasswrd);

export default korisnikRouter;

