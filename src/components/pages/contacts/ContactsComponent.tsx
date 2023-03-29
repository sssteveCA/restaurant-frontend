import { Component } from "react";
import TitleComponent from "../../partials/title/TitleComponent";

export default class ContactsComponent extends Component<any,any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TitleComponent title="Pagina dei contatti" />
        )
    }
}