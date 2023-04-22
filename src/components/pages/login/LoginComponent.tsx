import { Component, ReactNode } from "react";
import Types from "../../../constants/types";
import TwoButtonsComponent from "../../partials/buttons/twobuttons/TwoButtonsComponent";
import CheckBoxComponent from "../../partials/checkbox/CheckBoxComponent";
import LabelInputComponent from "../../partials/labelinput/LabelInputComponent";
import TitleComponent from "../../partials/title/TitleComponent";
import './LoginComponent.sass'
import { LoginRequest, LoginRequestType } from "../../../requests/login_request";
import { Paths } from "../../../constants/paths";

export default class LoginComponent extends Component<any,Types.LoginState>{

    constructor(props: any){
        super(props);
        this.state = {
            email: '', password: '', password_type: 'password'
        }
        this.onCheckBoxChange = this.onCheckBoxChange.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.onPrimaryButtonClick = this.onPrimaryButtonClick.bind(this)
    }

    componentDidMount(): void {
        setTimeout(()=>{
            document.getElementById('login-container')?.classList.add('my-transition')
        },100)
    }

    onCheckBoxChange(checked: boolean): void{
        if(checked)this.setState({password_type: 'text'})
        else this.setState({password_type: 'password'})
    }

    onInputChange(id: string, value: string): void{
        switch(id){
            case 'email':
                this.setState({email: value})
                break
            case 'password':
                this.setState({password: value})
                break
        }
      }

    onPrimaryButtonClick(): void{
        console.log("Lc onPrimaryButtonClick")
        console.log(this.state)
        const lr_data: LoginRequestType = {
            email: this.state.email, password: this.state.password, url: Paths.URL_BASE+Paths.URL_LOGIN
        }
        const lr: LoginRequest = new LoginRequest(lr_data)
        lr.login().then(obj => {

        })
    }

    render(): ReactNode {
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
               <TitleComponent title="Login" />
                <div id="login-container">
                    <form>
                        <LabelInputComponent input_id="email" input_type="text" label_text="Email" onInputChange={this.onInputChange} />
                        <LabelInputComponent input_id="password" input_type={this.state.password_type} label_text="Password" onInputChange={this.onInputChange} />
                        <CheckBoxComponent checkbox_id="show-password" label_text="Mostra password" onCbChange={this.onCheckBoxChange} />
                        <TwoButtonsComponent {...tb_props} />
                    </form>
                    
                </div> 
            </>
            
        );
    }
}