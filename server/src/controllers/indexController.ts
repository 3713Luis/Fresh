import {Request, Response} from 'express';

class indexController{

    public index(req: Request,res: Response) {

        res.json(
            {
                text: 'APPI is /api/index'
             }
        ); 
    } 
}

const indexRoutes = new indexController(); 
export default indexRoutes;