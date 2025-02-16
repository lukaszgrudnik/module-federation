import {Component} from "../component";
import {LoginField} from "./login-field";
import {LoginForm} from "./login-form";
import {tap} from "rxjs";

export class Login extends Component {
    constructor() {
        super();

        const loginForm = new LoginForm();
        this.addNameField(loginForm);
        this.addSurnameField(loginForm);
        loginForm.packInto(this);
    }

    addSurnameField(loginForm: LoginForm): void {
        const surnameField = new LoginField('Surname', 'surname');
        surnameField.valueChange?.pipe(tap(()=> alert('surnameField change'))).subscribe()
        surnameField.packInto(loginForm);
    }

    addNameField(loginForm: LoginForm): void {
        const nameField = new LoginField('Name', 'name');
        nameField.valueChange?.pipe(tap(()=> alert('nameField change'))).subscribe()
        nameField.packInto(loginForm);
    }

}