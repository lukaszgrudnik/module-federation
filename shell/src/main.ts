import { App } from "./shell-app/app";


const app = new App();
const rootElement = document.getElementById('root');
if(rootElement) {
    console.log(rootElement);
    app.setElement(rootElement);
}