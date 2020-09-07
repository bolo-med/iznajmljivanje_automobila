import express from 'express';
import * as rezervacijaControllers from './../controllers/rezervacija-controllers';
import expressjwt from 'express-jwt';

const rezervacijaRouter = express.Router();

let auth = expressjwt({
    secret: 'SECRET',
    userProperty: 'body.userData',
    algorithms: ['HS256']
});

rezervacijaRouter.route('').get(rezervacijaControllers.getAllRezervacije)
                           .post(rezervacijaControllers.insertRezervacija)
                           .put(rezervacijaControllers.updateRezervacija);

rezervacijaRouter.route('/:id').get(rezervacijaControllers.getRezervacijaByID)
                               .delete(auth, rezervacijaControllers.deleteRezervacija);

export default rezervacijaRouter;

