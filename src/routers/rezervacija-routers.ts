import express from 'express';
import * as rezervacijaControllers from './../controllers/rezervacija-controllers';

const rezervacijaRouter = express.Router();

rezervacijaRouter.route('').get(rezervacijaControllers.getAllRezervacije)
                           .post(rezervacijaControllers.insertRezervacija)
                           .put(rezervacijaControllers.updateRezervacija);

rezervacijaRouter.route('/:id').get(rezervacijaControllers.getRezervacijaByID)
                               .delete(rezervacijaControllers.deleteRezervacija);

export default rezervacijaRouter;

