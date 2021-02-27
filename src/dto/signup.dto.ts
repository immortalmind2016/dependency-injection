import { IsNotEmpty } from "class-validator";
import {Request} from "express"

export class SignUpDto{
 
   @IsNotEmpty()
   name:string="";
    
}
export interface CustomRequest<T> extends Request{
    body:T;
    
}