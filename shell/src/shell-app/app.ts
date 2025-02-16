import {Component} from "./component";
import {Login} from "./login/login";

export class App extends Component{
    constructor() {
        super();
    }

    onElementChange() {
        const login = new Login()
        login.packInto(this);
    }
}