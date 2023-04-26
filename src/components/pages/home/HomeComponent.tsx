import React from 'react'
import TitleComponent from '../../partials/title/TitleComponent'
import AppareanceTextComponent from '../../partials/appereancetext/AppareanceTextComponent'
import HomeCardContainerComponent from '../../partials/homecardcontainer/HomeCardContainerComponent'

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