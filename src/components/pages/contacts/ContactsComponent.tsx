import { Component } from "react";
import Types from "../../../constants/types";
import TwoButtonsComponent from "../../partials/buttons/twobuttons/TwoButtonsComponent";
import TitleComponent from "../../partials/title/TitleComponent";
import './ContactsComponent.sass';

export default class ContactsComponent extends Component<any,any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        let tb_props: Types.TwoButtonsProps =  {
            buttons: [
                {
                    classes: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", 
                    text: "Invia"},
                {
                    classes: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", 
                    text: "Annulla"},
            ]
        }
        return (
            <>
                <TitleComponent title="Pagina dei contatti" />
                <div id="contacts-container">
                    <form>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="label-div columns-12 md:columns-2 md:col-start-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nome</label>
                            </div>
                            <div className="input-div columns-12 md:columns-6">
                                <input id="name" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                            </div>      
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="label-div columns-12 md:columns-2 md:col-start-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            </div>
                            <div className="input-div columns-12 md:columns-6">
                                <input className="hadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
                            </div>        
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div className="label-div columns-12 md:columns-2 md:col-start-3">
                                <label htmlFor="message">Messaggio</label>
                            </div>
                            <div className="textarea-div columns-12 md:columns-6">
                                <textarea id="message"></textarea>
                            </div>   
                        </div>
                        <TwoButtonsComponent {...tb_props} />
                    </form>
                </div>
            </>
            
        )
    }
}