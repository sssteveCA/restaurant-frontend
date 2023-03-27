import { Component } from "react";

export default class ContactsComponent extends Component<any,any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
            <div className='text-2xl md:text-3xl lg:text-4xl text-black font-black text-center'>Pagina dei contatti</div>
        )
    }
}