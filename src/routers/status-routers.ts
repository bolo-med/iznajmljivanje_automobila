import express from 'express';
import * as statusControllers from './../controllers/status-controllers';

const statusRouter = express.Router();

statusRouter.route('').get(statusControllers.getAllStatusi)
                      .post(statusControllers.insretStatus)
                      .put(statusControllers.updateStatus);

statusRouter.route('/:id').get(statusControllers.getStatusByID)
                          .delete(statusControllers.deleteStatus);

export default statusRouter;

