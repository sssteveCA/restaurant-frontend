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
                    <form>
                        <div className="flex justify-center md:justify-evenly flex-col md:flex-row">
                            <label htmlFor="name">Nome</label>
                            <input id="name" type="text" />
                        </div>
                        <div className="flex justify-center md:justify-evenly flex-col md:flex-row">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" />
                        </div>
                        <div className="flex justify-center md:justify-evenly flex-col md:flex-row">
                            <label htmlFor="message">Messaggio</label>
                            <textarea id="message"></textarea>
                        </div>
                        <div className="flex justify-center sm:justify-evenly flex-col sm:flex-row">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Invia
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Annulla
                            </button>
                        </div>
                    </form>
                </div>
            </>
            
        )
    }
}