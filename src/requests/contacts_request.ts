
export type ContactsRequestType = {
    email: string, message: string, name: string, subject: string, url: string
}

export class ContactsRequest{
    private _email: string; 
    private _message: string; 
    private _name: string; 
    private _subject: string; 
    private _url: string;
    private _errno: number = 0;
    private _error: string|null = null;

    public static ERR_FETCH: number = 1;

    public static ERR_FETCH_MSG: string = "Errore durante l'invio della richiesta. Se il problema persiste contattare l'amministratore del sito";

    constructor(data: ContactsRequestType){
        this.setValues(data)
    }

    get email(){ return this._email; }
    get message(){ return this._message; }
    get name(){ return this._name; }
    get subject(){ return this._subject; }
    get url(){ return this._url; }
    get errno(){ return this._errno; }
    get error(){
        switch(this._errno){
            case ContactsRequest.ERR_FETCH:
                this._error = ContactsRequest.ERR_FETCH_MSG;
                break
            default:
                this._error = null;
                break
        }
        return this._error;
    }

    private setValues(data: ContactsRequestType): void{
        this._email = data.email;
        this._message = data.message;
        this._name = data.name;
        this._subject = data.subject;
        this._url = data.url;
    }
}