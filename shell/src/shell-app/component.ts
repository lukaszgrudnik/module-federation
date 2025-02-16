
export abstract class Component {
    private element: HTMLElement = document.createElement('div');

    onElementChange?(): void;

    appendChild(element: HTMLElement): void {
        this.element.appendChild(element);
    }

    setElement(element: HTMLElement): void {
        this.element = element;
        if(this.onElementChange)
            this.onElementChange();
    }

    packInto(component: Component): void {
        component.appendChild(this.element);
    }
}