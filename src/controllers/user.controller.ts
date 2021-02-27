
import {Request,Response,ErrorRequestHandler} from 'express'
import UserModel from "../model/User"
import UserServices from "../services/user.services"


class UserController{
    constructor
    (
        private userModel:any,
        private userServices:UserServices
    ){
    }
    signup=async (req:Request,res:Response,err:ErrorRequestHandler)=>{
        const users=await this.userModel.findOne({})
        
        console.log(users)
        res.send(   this.userServices.getUser())
    }
}

export default new UserController(UserModel,new UserServices)