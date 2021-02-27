import express from "express"
import indexRouter from "./routes/index.routes"
import userRouter from "./routes/user.routes"
import Database from "./config/database"
class App{
    app: express.Application
    constructor(
       private port: number
    ){
       this.app=express()
       this.settings()
       this.routes()
    }
    async listen(){
     await this.app.listen(this.port)
    }
    settings(){
       this.app.set("port",this.port||process.env.PORT||10000)
       let db=new Database()
       db.connect()
    }
    routes(){
      this.app.use("/",indexRouter)
      this.app.use("/user",userRouter)
    }
   

}
export default App