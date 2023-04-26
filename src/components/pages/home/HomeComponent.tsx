import React from 'react'
import TitleComponent from '../../partials/title/TitleComponent'
import AppareanceTextComponent from '../../partials/appereancetext/AppareanceTextComponent'

const HomeComponent = () => {
  return (
    <>
      <TitleComponent title="Benvenuto" />
      <AppareanceTextComponent text='Benvenuto nel nostro ristorante' />
    </>
    
  )
}

export default HomeComponent