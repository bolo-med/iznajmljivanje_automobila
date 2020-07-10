import express from 'express';
import * as proizvodjacControllers from './../controllers/proizvodjac-controllers';

const proizvodjacRouter = express.Router();

proizvodjacRouter.route('').get(proizvodjacControllers.getAllProizvodjaci)
                           .post(proizvodjacControllers.insertProizvodjac)
                           .put(proizvodjacControllers.updateProizvodjac);

proizvodjacRouter.route('/:id').get(proizvodjacControllers.getProizvodjacByID)
                               .delete(proizvodjacControllers.deleteProizvodjac);

export default proizvodjacRouter;

