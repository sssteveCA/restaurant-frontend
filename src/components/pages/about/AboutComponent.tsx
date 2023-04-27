import React from 'react'
import TitleComponent from '../../partials/text/title/TitleComponent'
import './AboutComponent.sass'
import Types from '../../../constants/types'
import TeamItemComponent from './teamitem/TeamItemComponent'
import tizio from '../../../assets/images/team/tizio.jpg'
import caio from '../../../assets/images/team/caio.jpg'
import sempronio from '../../../assets/images/team/sempronio.jpg'
import mevio from '../../../assets/images/team/mevio.jpg'

const AboutComponent = () => {

  let our_team: Types.TeamItemProps[] = [
    {
      image: {
        classes: 'order-1', name: 'Tizio', url: tizio
      },
      text: {
        classes: 'order-2', description: 'Titolare', title: 'Tizio'
      }
    },
    {
      image: {
        classes: 'order-2', name: 'Caio', url: caio
      },
      text: {
        classes: 'order-1', description: 'Chef', title: 'Caio'
      }
    },
    {
      image: {
        classes: 'order-1', name: 'Sempronio', url: sempronio
      },
      text: {
        classes: 'order-2', description: 'Cameriere', title: 'Sempronio'
      }
    },
    {
      image: {
        classes: 'order-2', name: 'Mevio', url: mevio
      },
      text: {
        classes: 'order-1', description: 'Sommelier', title: 'Mevio'
      }
    }
  ];

  return (
    <>
      <TitleComponent title="Pagina chi siamo" />
      <div className='mt-10 flex flex-col'>
        {
          our_team.map((item,i) => ( <TeamItemComponent key={i} {...item} />))
        }
      </div>
    </>
    
  )
}

export default AboutComponent