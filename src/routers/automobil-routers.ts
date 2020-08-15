import express from 'express';
import * as automobilControllers from './../controllers/automobil-controllers';
import expressjwt from 'express-jwt';

const automobilRouter = express.Router();

let auth = expressjwt({
    secret: 'SECRET',
    userProperty: 'body.userData',
    algorithms: ['HS256']
});

automobilRouter.route('').get(automobilControllers.getAllAutomobili)
                         .post(automobilControllers.insertAutomobil)
                         .put(automobilControllers.updateAutomobil);

automobilRouter.route('/:id').get(auth, automobilControllers.getAutomobilByID)
                             .delete(automobilControllers.deleteAutomobil);

export default automobilRouter;

