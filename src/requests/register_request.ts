
export type RegisterRequestType = {
    email: string, username: string, password: string, conf_password: string, url: string
}

export class RegisterRequest{
    private _email: string; 
    private _username: string; 
    private _password: string; 
    private _conf_password: string; 
    private _url: string;
    private _errno: number = 0;
    private _error: string|null = null;

    constructor(data: RegisterRequestType){
        this.setValues(data);
    }

    get email(){ return this._email; }
    get username(){ return this._username; }
    get password(){ return this._password; }
    get conf_password(){ return this._conf_password; }
    get url(){ return this._url; }

    private setValues(data: RegisterRequestType): void{
        this._email = data.email;
        this._username = data.username;
        this._password = data.password;
        this._conf_password = data.conf_password;
        this._url = data.url;
    }
}