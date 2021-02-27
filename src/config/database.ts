

import mongoose from 'mongoose';
export default class Database{
    constructor(){

    }
    connect(){
        //@ts-ignore
        mongoose.connect(process.env.DB)
    }
    disconnect(){
        mongoose.disconnect()
    }

}