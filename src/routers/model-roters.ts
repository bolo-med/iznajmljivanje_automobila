import express from 'express';
import * as modelControllers from './../controllers/model-controllers';

const modelRouter = express.Router();

modelRouter.route('').get(modelControllers.getAllModeli)
                     .post(modelControllers.insertModel)
                     .put(modelControllers.updateModel);

modelRouter.route('/:id').get(modelControllers.getModelByID)
                         .delete(modelControllers.deleteModel);

export default modelRouter;

