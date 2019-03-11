import { Router } from 'express';
import loginController from '../controllers/loginController';

class loginRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void {
        this.router.get('/', loginController.getAll);
        this.router.get('/:id', loginController.getOne);
        this.router.post('/', loginController.create);
        this.router.delete('/:id', loginController.delete);
        this.router.put('/:id',loginController.put);

    }
}

const loginRoute = new loginRoutes();
export default loginRoute.router;