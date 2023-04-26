import React, { Component } from 'react'
import Types from '../../../constants/types'
import CardComponent from '../card/CardComponent'
import about_us from '../../../assets/images/aboutus_card.jpg'
import ourfood from '../../../assets/images/ourfood_card.webp'
import menu from '../../../assets/images/menu_card.jpg'
import blog from '../../../assets/images/blog_card.jpg'
import contacts from '../../../assets/images/contacts_logo.jpg'
import './HomeCardContainerComponent.sass'

export default class HomeCardContainerComponent extends Component<any,any>{

    componentDidMount(): void {
        setTimeout(() => {
            document.getElementById('home-card-container')?.classList.add('my-transition')
        }, 100)
    }

    render(){
        let card_props: Types.CardProps[] = [
            {button_text: 'Per saperne di più', image: about_us, text:'La nostra storia e il nostro team', title: 'Chi siamo', url: ''},
            {button_text: 'Per saperne di più', image: ourfood, text:'La lista di tutte le nostre pietanze', title: 'Le nostre pietanze', url: ''},
            {button_text: 'Per saperne di più', image: menu, text:'Il menu offerto a pranzo e a cena', title: 'Menu', url: ''},
            {button_text: 'Per saperne di più', image: blog, text:'Notizie e consigli del nostro staff', title: 'Blog', url: ''},
            {button_text: 'Per saperne di più', image: contacts, text:'Vuoi maggiori informazioni oppure hai una richiesta?', title: 'Contatti', url: ''},
        ];

        return (
            <div id="home-card-container" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-10 pb-5">
                {
                    card_props.map((item,i) => (
                            <CardComponent key={i} {...item} />
                        )
                    )
                }
            </div>
        )
    }
  
}