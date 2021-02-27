import { Request, Response,ErrorRequestHandler } from 'express'
import IndexService from '../services/index.services';



 class IndexController{
    constructor(
        private indexServices:IndexService
    ){
    }

    getIndex=(req:Request,res:Response,next:ErrorRequestHandler)=>{
        return res.json({name:this.indexServices.getUser()}); 
    }
}


export default new IndexController(new IndexService())

