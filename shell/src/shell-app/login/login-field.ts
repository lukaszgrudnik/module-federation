import {Observable} from "rxjs";
import {Component} from "../component";
import {TextInput} from "./inputs/text-input";

export class LoginField extends Component{

    valueChange?: Observable<string>;

    constructor(label: string, name: string) {
        super();

        const textInput = new TextInput();
        this.valueChange = textInput.valueChange;
        textInput.packInto(this)
    }
}