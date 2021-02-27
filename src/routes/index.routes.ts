import {Router} from "express"
import indexController from "../controllers/index.controller"
import {SignUpDto,CustomRequest} from "../dto/signup.dto"
import {deserialize, JsonProperty} from 'json-typescript-mapper';
import {  validate, Validator } from 'class-validator';

const router=Router()

router.get("/",(req,res,next)=>{
  const validator=new Validator()
  let input = deserialize(SignUpDto,req.body)
  let errors=validator.validateSync(input);
  console.log("EERROR ")
      next()
},indexController.getIndex)

export default router