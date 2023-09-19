export enum AttributePlantilla {
}

export default class plantilla extends HTMLElement {

    static get observedAttributes(){
        const attrs: Record <AttributePlantilla, null> = {
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributePlantilla, 
        oldValue: string | undefined, 
        newValue: string | undefined){
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
        }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

    }
}

customElements.define('plantilla',plantilla);