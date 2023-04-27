import React from 'react'
import TitleComponent from '../../partials/text/title/TitleComponent'
import './AboutComponent.sass'
import Types from '../../../constants/types'
import TeamItemComponent from './teamitem/TeamItemComponent'
import alessandro_borghese from '../../../assets/images/team/alessandro_borghese.jpg'
import carlo_cracco from '../../../assets/images/team/carlo_cracco.jpg'
import giorgio_locatelli from '../../../assets/images/team/giorgio_locatelli.jpg'
import antonio_cannavaciuolo from '../../../assets/images/team/antonio_cannavaciuolo.jpg'

const AboutComponent = () => {

  let our_team: Types.TeamItemProps[] = [
    {
      id: 1,
      image: {
        classes: 'order-1', name: 'Alessandro Borghese', url: alessandro_borghese
      },
      text: {
        classes: 'order-2', description: `È uno dei cuochi più famosi d’Italia e protagonista indiscusso del successo della cucina in televisione, è riuscito a far avvicinare e appassionare un pubblico sempre più variegato all’arte della cucina italiana.
        Esempio di un nuovo approccio alla materia prima, ha rinnovato il concetto di cultura e professionalità nel settore della ristorazione.
        Definito lo chef «Rock&Social», è stato premiato più volte per la sua cucina, legata alla qualità, dove tradizione e innovazione diventano metodo, stile, arte e gusto.`, title: 'Alessandro Borghese'
      }
    },
    {
      id: 2,
      image: {
        classes: 'order-2', name: 'Carlo Cracco', url: carlo_cracco
      },
      text: {
        classes: 'order-1', description: `È il più famoso tra i grandi chef usciti dalle feconda covata di Gualtiero Marchesi. Carlo Cracco, vicentino classe 1965, deve la propria notorietà presso il vasto pubblico al fatto di essere diventato anche un personaggio tv, di quelli ambiti da cacciatori (e soprattutto cacciatrici, visto il crescente fascino acquistato con l’età) di selfie. Ma i buongustai non sono attirati da Masterchef, quanto dalla sua cucina, forse la più creativa tra quelle celebrate a Milano.`, title: 'Carlo Cracco'
      }
    },
    {
      id: 3,
      image: {
        classes: 'order-1', name: 'Giorgio Locatelli', url: giorgio_locatelli
      },
      text: {
        classes: 'order-2', description: `È uno chef italiano di fama internazionale, noto per la sua cucina raffinata, basata sulla tradizione culinaria italiana. Nato a Corgeno, in Lombardia, nel 1963, Locatelli ha iniziato la sua carriera in cucina da adolescente, lavorando poi in alcuni dei ristoranti più prestigiosi d'Italia.`, title: 'Giorgio Locatelli'
      }
    },
    {
      id: 4,
      image: {
        classes: 'order-2', name: 'Antonio Cannavacciuolo', url: antonio_cannavaciuolo
      },
      text: {
        classes: 'order-1', description: `Nato il 16 aprile 1975 a Vico Equense (dove nasce anche Gino D’Acampo), in provincia di Napoli. Studia all’Istituto Alberghiero “F.De Gennaro” del suo paese natale, dove ha insegnato anche il padre. Dopo il diploma, nel 1994, inizia a lavorare come cuoco in Penisola Sorrentina. Successivamente iniziano le esperienze all’estero: tra cui quella in Alsazia, a Strasburgo. Ritorna in Italia e lavora all’Hotel Quisisana a Capri nel tempo in cui Gualtiero Marchesi ne era il consulente. Villa Crespi arriva solo nel 1999, dimora storica che prende con sua moglie e grazie al quale riceve ben due stelle Michelin (nel 2003 e nel 2006).`, title: 'Antonio Cannavaciuolo'
      }
    }
  ];

  return (
    <>
      <TitleComponent title="Il team" />
      <div className='mt-10 flex flex-col'>
        {
          our_team.map((item,i) => ( <TeamItemComponent key={i} {...item} />))
        }
      </div>
    </>
    
  )
}

export default AboutComponent