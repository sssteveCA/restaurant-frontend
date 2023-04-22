
import axios from "axios";

export type RegisterRequestType = {
    first_name: string, last_name: string, email: string, password: string, conf_password: string, url: string
}

export class RegisterRequest{
    private _first_name: string;
    private _last_name: string;
    private _email: string; 
    private _password: string; 
    private _conf_password: string; 
    private _url: string;
    private _errno: number = 0;
    private _error: string|null = null;

    public static ERR_FETCH: number = 1;

    private static ERR_FETCH_MSG: string = "Errore durante la registrazione. Se il problema persiste contatta l'amministratore del sito";

    constructor(data: RegisterRequestType){
        this.setValues(data);
    }

    get first_name(){ return this._first_name; }
    get last_name(){ return this._last_name; }
    get password(){ return this._password; }
    get conf_password(){ return this._conf_password; }
    get url(){ return this._url; }
    get errno(){ return this._errno; }
    get error(){
        switch(this._errno){
            case RegisterRequest.ERR_FETCH:
                this._error = RegisterRequest.ERR_FETCH_MSG;
                break;
            default:
                this._error = null;
                break;
        }
        return this._error; 
    }

    private setValues(data: RegisterRequestType): void{
        this._first_name = data.first_name;
        this._last_name = data.last_name;
        this._email = data.email;
        this._password = data.password;
        this._conf_password = data.conf_password;
        this._url = data.url;
    }

    public async register(): Promise<object>{
        let response: object = {}
        this._errno = 0;
        try{
            await this.registerPromise().then(res => {
                response = JSON.parse(res)
            }).catch(err =>{
                throw err
            })
        }catch(err){
            if(err instanceof axios.AxiosError){
                let string_error: string = err.response?.data
                response = JSON.parse(string_error)
            }
            else{
                this._errno = RegisterRequest.ERR_FETCH
                response = {
                    done: false, message: this.error
                }
            }
        }
        return response;
    }

    private async registerPromise(): Promise<string>{
        return await new Promise<string>((resolve,reject) => {
            axios.post(this._url,{
                firstName: this._first_name,
                lastName: this._last_name,
                email: this._email,
                password: this._password,
                confPassword: this._conf_password
            }).then(res => resolve(res.data)).catch(err => reject(err))
        });
    }
}