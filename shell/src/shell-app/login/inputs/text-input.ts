import {Component} from "../../component";
import {fromEvent, map, Observable} from "rxjs";

export class TextInput extends Component{

    valueChange?: Observable<string>

    constructor() {
        super();
        const inputElement = document.createElement('input');
        this.set(inputElement);
        this.appendChild(inputElement);
    }

    private set(inputElement: HTMLInputElement): void {
        inputElement.type = 'text';
        this.valueChange = fromEvent(inputElement, 'input').pipe(map((event: Event)=> (event?.target as HTMLInputElement).value));
    }
}