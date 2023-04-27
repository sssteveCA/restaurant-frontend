
import axios from 'axios'

export type MenuRequestType = {
    url: string;
}

export class MenuRequest{

    private _menu: any[] = [];
    private _url: string;
    private _errno: number = 0;
    private _error: string|null = null;

    public static ERR_FETCH:number = 1;

    private static ERR_FETCH_MSG:string = "Errore durante il caricamento dei menu. Se il problema persiste contatta l'amministratore del sito";

    constructor(data: MenuRequestType){
        this._url = data.url;
    }

    get menu(){ return this._menu; }
    get url(){ return this._url; }
    get errno(){ return this._errno; }
    get error(){
        switch(this._errno){
            case MenuRequest.ERR_FETCH:
                this._error = MenuRequest.ERR_FETCH_MSG;
                break
            default:
                this._error = null;
                break;
        }
        return this._error;
    }

    public async getMenu(): Promise<{[index: string]: any}>{
        let response: object = {}
        this._errno = 0;
        try{
            await this.getMenuPromise().then(res => response = JSON.parse(res))
        }catch(e){
            this._errno = MenuRequest.ERR_FETCH;
            response = {done: false, message: this.error}
        }
        return response
    }

    private async getMenuPromise(): Promise<string>{
        return await new Promise<string>((resolve,reject)=>{
            axios.get(this._url)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }

}