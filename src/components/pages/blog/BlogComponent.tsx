import React, { Component } from 'react'
import TitleComponent from '../../partials/text/title/TitleComponent'
import Types from '../../../constants/types'
import { BlogRequest, BlogRequestType } from '../../../requests/blog_request'
import { Keys } from '../../../constants/keys'
import { Paths } from '../../../constants/paths'
import SpinnerComponent from '../../partials/spinner/SpinnerComponent'
import MessageComponent from '../../partials/text/message/MessageComponent'

export default class BlogComponent extends Component<any,Types.BlogState>{

    constructor(props: any){
        super(props)
        this.state = {
            articles: [], message: '', spinner_show: false
        }
    }

    componentDidMount(): void {
        let br_data: BlogRequestType = {
            url: Paths.URL_BASE+Paths.URL_ARTICLES
        }
        let br: BlogRequest = new BlogRequest(br_data)
        this.setState({spinner_show: true})
        br.getArticles().then(obj => {
            this.setState({spinner_show: false})
            if(obj[Keys.KEY_DONE]) this.setState({articles: obj['articles']})
            else this.setState({message: obj[Keys.KEY_MESSAGE]})
        })
    }

    render(): React.ReactNode {
        return (
            <>
                <TitleComponent title="Blog" />
                <SpinnerComponent visible={this.state.spinner_show} />
                <MessageComponent message={this.state.message} />
                {
                    this.state.articles.map((article,i) => <div key={i} />)
                }
            </>
            
        )
    }
}