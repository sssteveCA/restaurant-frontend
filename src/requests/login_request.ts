
export type LoginRequestType = {
    email: string; password: string, url: string
}

export class LoginRequest{
    private _email: string; 
    private _password: string; 
    private _url: string;
    private _errno: number = 0;
    private _error: string|null = null;

    public static ERR_FETCH:number = 1;

    private static ERR_FETCH_MSG:string = "Errore durante il login. Se il problema persiste contatta l'amministratore del sito";

    constructor(data: LoginRequestType){
        this._email = data.email;
        this._password = data.password;
        this._url = data.url;
    }

    get email(){ return this._email; }
    get password(){ return this._password; }
    get url(){ return this._url; }
    get errno(){ return this._errno; }
    get error(){ 
        switch(this._errno){
            case LoginRequest.ERR_FETCH:
                this._error = LoginRequest.ERR_FETCH_MSG;
                break
            default:
                this._error = null;
                break
        }
        return this._error; 
    }
}