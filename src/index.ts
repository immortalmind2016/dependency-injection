import App from "./app"

async function main(){
    const app=new App(1000)
    await app.listen()
}
main()