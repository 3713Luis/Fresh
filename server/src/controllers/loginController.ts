import {Request, Response} from 'express';
import pool from '../dataBase';


class loginController{

    public async getAll(req: Request,res: Response): Promise<void>{
       const consultAll = await pool.query('SELECT * FROM usuarios');
       res.json(consultAll);
        console.log('Consultando Usuario')
    }
    public async getOne(req: Request,res: Response): Promise<any>{
        const {id} = req.params;
        const consultOne = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        
      console.log(consultOne);
        
      if (consultOne.length > 0) {
        return res.json(consultOne[0]);
      }else{
        res.status(404).json({text: "El usuario no existe"});

      }        

    }
    public async create(req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO usuarios SET ?',[req.body]);
        res.json({message: 'Usuario Registrado'});

    }
    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
        res.json({message: 'Usuario Eliminado'});



    }
    public async put(req: Request, res: Response){
        const {id} = req.params;
        await pool.query('UPDATE usuarios SET ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Usuario Actualizado'});
    }
}

const logController = new loginController(); 
export default logController;