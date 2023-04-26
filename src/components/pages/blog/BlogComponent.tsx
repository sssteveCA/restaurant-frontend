import React, { Component } from 'react'
import TitleComponent from '../../partials/text/title/TitleComponent'

export default class BlogComponent extends Component<any,any>{

    constructor(props: any){
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TitleComponent title="Pagina del blog" />
        )
    }
}