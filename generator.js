const fs=require("fs")
const path=require("path")
if(process.argv[2]=="-g"&&process.argv[3]){
    const name=process.argv[3]
    const currentPath=(type)=>`${__dirname}/src/${type}/${name}.`
    fs.openSync(`${currentPath("controllers")}controller.ts`,"wx")
    fs.openSync(`${currentPath("routes")}routes.ts`,"wx")
    fs.openSync(`${currentPath("services")}services.ts`,"wx")

  //  fs.mkdirSync(`./routes/${name}.routes.js`)
    //fs.mkdirSync(`./services/${name}.services.js`)

}