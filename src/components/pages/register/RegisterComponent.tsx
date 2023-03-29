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
    this.onInputChange = this.onInputChange.bind(this)
    this.onPrimaryButtonClick = this.onPrimaryButtonClick.bind(this)
  }

  onInputChange(id: string, value: string): void{
    switch(id){
      case 'username':
        this.setState({username: value})
        break
      case 'email':
        this.setState({email: value})
        break
      case 'password':
        this.setState({password: value})
        break
      case 'conf-password':
        this.setState({conf_password: value})
        break
      
    }
  }

  onPrimaryButtonClick(): void{
    console.log("Rc onPrimaryButtonClick")
    console.log(this.state)
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
                <LabelInputComponent input_id='username' input_type='text' label_text='Nome utente' onInputChange={this.onInputChange} />
                <LabelInputComponent input_id='email' input_type='email' label_text='Indirizzo email' onInputChange={this.onInputChange} />
                <LabelInputComponent input_id='password' input_type='password' label_text='Password' onInputChange={this.onInputChange} />
                <LabelInputComponent input_id='conf-password' input_type='password' label_text='Conferma password' onInputChange={this.onInputChange}/>
                <CheckBoxComponent checkbox_id='show-password' label_text='Mostra password' />
                <TwoButtonsComponent {...tb_props} />
            </form>
        </div>
      </>
    )
  }
}
