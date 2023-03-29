import { Component } from "react";
import TitleComponent from "../../partials/title/TitleComponent";

export default class ContactsComponent extends Component<any,any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
            <>
                <TitleComponent title="Pagina dei contatti" />
                <div id="contacts-container">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <label htmlFor="">Nome</label>
                        <input id="name" type="text" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <label htmlFor="">Email</label>
                        <input id="email" type="email" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <label htmlFor="">Messaggio</label>
                        <textarea id="message"></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                    </div>
                </div>
            </>
            
        )
    }
}