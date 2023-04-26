import React from 'react'
import Types from '../../../constants/types'
import CardComponent from '../card/CardComponent';

const HomeCardContainerComponent = () => {

    let card_props: Types.CardProps[] = [
        {button_text: 'Per saperne di più', image: '', text:'', title: 'Chi siamo', url: ''},
        {button_text: 'Per saperne di più', image: '', text:'', title: 'Le nostre pietanze', url: ''},
        {button_text: 'Per saperne di più', image: '', text:'', title: 'Menu', url: ''},
        {button_text: 'Per saperne di più', image: '', text:'', title: 'Blog', url: ''},
        {button_text: 'Per saperne di più', image: '', text:'', title: 'Contatti', url: ''},
    ];


  return (
    <div id="home-card-container">
        {
            card_props.map(item => {
                return (
                 <div className='home-card-item'>   
                    <CardComponent {...item} />
                </div>
                )
            })
        }
    </div>
  )
}

export default HomeCardContainerComponent