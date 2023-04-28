import React, { Component } from 'react'
import Types from '../../../constants/types'
import TwoButtonsComponent from '../../partials/buttons/twobuttons/TwoButtonsComponent'
import CheckBoxComponent from '../../partials/form/checkbox/CheckBoxComponent'
import LabelInputComponent from '../../partials/form/labelinput/LabelInputComponent'
import TitleComponent from '../../partials/text/title/TitleComponent'
import './RegisterComponent.sass'
import { RegisterRequest, RegisterRequestType } from '../../../requests/register_request'
import { Paths } from '../../../constants/paths'
import { Keys } from '../../../constants/keys'
import MessageComponent from '../../partials/text/message/MessageComponent'

export default class RegisterComponent extends Component<any,Types.RegisterState> {

  constructor(props: any){
    super(props)
    this.state = {
      first_name: '', last_name: '', email: '', password: '', conf_password: '', passwords_type: 'password', register_message: '', show_spinner: false
    }
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onPrimaryButtonClick = this.onPrimaryButtonClick.bind(this)
  }

  componentDidMount(): void {
    setTimeout(()=>{
        document.getElementById('register-container')?.classList.add('my-transition')
    },100)
}

  onCheckBoxChange(checked: boolean): void{
    if(checked)this.setState({passwords_type: 'text'})
    else this.setState({passwords_type: 'password'})
  }

  onInputChange(id: string, value: string): void{
    switch(id){
      case 'first-name':
        this.setState({first_name: value})
        break
      case 'last-name':
        this.setState({last_name: value})
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

  /**
   * When the user press the register button
   */
  onPrimaryButtonClick(): void{
    this.setState({register_message: ''})
    const rr_data: RegisterRequestType = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      conf_password: this.state.conf_password,
      url: Paths.URL_BASE+Paths.URL_REGISTER
    }
    const rr: RegisterRequest = new RegisterRequest(rr_data)
    this.setState({show_spinner: true})
    rr.register().then(obj => {
      this.setState({show_spinner: false})
      if(!obj[Keys.KEY_DONE]) this.setState({register_message: obj[Keys.KEY_MESSAGE]})
    })
  }

  render() {

    let tb_props: Types.TwoButtonsProps =  {
        buttons: [
            {
                classes: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", 
                text: "Registrati"},
            {
                classes: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", 
                text: "Annulla"},
        ],
        onPrimaryButtonClick: this.onPrimaryButtonClick,
        show_spinner: this.state.show_spinner
    }

    return (
      <>
        <TitleComponent title='Registrati' />
        <div id="register-container">
            <form>
                <LabelInputComponent input_id='first-name' input_type='text' label_text='Nome' onInputChange={this.onInputChange} />
                <LabelInputComponent input_id='last-name' input_type='text' label_text='Cognome' onInputChange={this.onInputChange} />
                <LabelInputComponent input_id='email' input_type='email' label_text='Indirizzo email' onInputChange={this.onInputChange} />
                <LabelInputComponent input_id='password' input_type={this.state.passwords_type} label_text='Password' onInputChange={this.onInputChange} />
                <LabelInputComponent input_id='conf-password' input_type={this.state.passwords_type} label_text='Conferma password' onInputChange={this.onInputChange}/>
                <CheckBoxComponent checkbox_id='show-password' label_text='Mostra password' onCbChange={this.onCheckBoxChange} />
                <TwoButtonsComponent {...tb_props} />
                <MessageComponent message={this.state.register_message} />
            </form>
        </div>
      </>
    )
  }
}
