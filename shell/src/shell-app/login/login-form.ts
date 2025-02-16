import {Component} from "../component";

export class LoginForm extends Component{
    constructor() {
        super();
        const form = document.createElement('form');
        this.appendChild(form);
    }
}