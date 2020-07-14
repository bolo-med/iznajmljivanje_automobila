import express from 'express';
import * as automobilControllers from './../controllers/automobil-controllers';

const automobilRouter = express.Router();

automobilRouter.route('').get(automobilControllers.getAllAutomobili)
                         .post(automobilControllers.insertAutomobil)
                         .put(automobilControllers.updateAutomobil);

automobilRouter.route('/:id').get(automobilControllers.getAutomobilByID)
                             .delete(automobilControllers.deleteAutomobil);

export default automobilRouter;

