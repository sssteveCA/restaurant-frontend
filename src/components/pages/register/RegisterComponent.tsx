import React, { Component } from 'react'
import Types from '../../../constants/types'
import TwoButtonsComponent from '../../partials/buttons/twobuttons/TwoButtonsComponent'
import CheckBoxComponent from '../../partials/checkbox/CheckBoxComponent'
import LabelInputComponent from '../../partials/labelinput/LabelInputComponent'
import TitleComponent from '../../partials/title/TitleComponent'
import './RegisterComponent.sass'

export default class RegisterComponent extends Component<any,Types.RegisterState> {

  constructor(props: any){
    super(props)
    this.state = {
      username: '', email: '', password: '', conf_password: ''
    }
  }

  onPrimaryButtonClick(): void{
    console.log("Rc onPrimaryButtonClick")
  }

  render() {

    let tb_props: Types.TwoButtonsProps =  {
        buttons: [
            {
                classes: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", 
                text: "Login"},
            {
                classes: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", 
                text: "Annulla"},
        ],
        onPrimaryButtonClick: this.onPrimaryButtonClick
    }

    return (
      <>
        <TitleComponent title='Registrati' />
        <div id="register-container">
            <form>
                <LabelInputComponent input_id='username' input_type='text' label_text='Nome utente' value={this.state.username} />
                <LabelInputComponent input_id='email' input_type='email' label_text='Indirizzo email' value={this.state.email}/>
                <LabelInputComponent input_id='password' input_type='password' label_text='Password' value={this.state.password}/>
                <LabelInputComponent input_id='conf-password' input_type='password' label_text='Conferma password' value={this.state.conf_password}/>
                <CheckBoxComponent checkbox_id='show-password' label_text='Mostra password' />
                <TwoButtonsComponent {...tb_props} />
            </form>
        </div>
      </>
    )
  }
}
