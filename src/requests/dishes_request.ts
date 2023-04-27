
import axios, { isAxiosError } from 'axios'

export type DishesRequestType = {
    url: string;
}

export class DishesRequest{

    private _dishes: any[] = [];
    private _url: string;
    private _errno: number = 0;
    private _error: string|null = null;

    public static ERR_FETCH:number = 1;

    private static ERR_FETCH_MSG:string = "Errore durante la ricerca delle pietanze. Se il problema persiste contatta l'amministratore del sito";

    constructor(data: DishesRequestType){
        this._url = data.url;
    }

    get dishes(){ return this._dishes; }
    get url(){ return this._url; }
    get errno(){ return this._errno; }
    get error(){
        switch(this._errno){
            case DishesRequest.ERR_FETCH:
                this._error = DishesRequest.ERR_FETCH_MSG;
                break
            default:
                this._error = null;
                break;
        }
        return this._error;
    }

    public async getDishes(): Promise<object>{
        let response: object = {}
        this._errno = 0;
        try{
            await this.getDishesPromise().then(res => response = JSON.parse(res))
        }catch(e){
            this._errno = DishesRequest.ERR_FETCH;
            response = {done: false, message: this.error}
        }
        return response
    }

    private async getDishesPromise(): Promise<string>{
        return await new Promise<string>((resolve,reject)=>{
            axios.get(this._url)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }

}