import React from 'react'
import TitleComponent from '../../partials/text/title/TitleComponent'
import AppareanceTextComponent from '../../partials/text/appereancetext/AppareanceTextComponent'
import HomeCardContainerComponent from '../../partials/card/homecardcontainer/HomeCardContainerComponent'

const HomeComponent = () => {
  return (
    <>
      <TitleComponent title="Benvenuto" />
      <AppareanceTextComponent id='home-text' text='Benvenuto nel nostro ristorante' />
      <HomeCardContainerComponent />
    </>
    
  )
}

export default HomeComponent