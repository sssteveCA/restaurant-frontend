
import axios from 'axios'

export type BlogRequestType = {
    url: string;
}

export class BlogRequest{

    private _articles: any[] = [];
    private _url: string;
    private _errno: number = 0;
    private _error: string|null = null;

    public static ERR_FETCH:number = 1;

    private static ERR_FETCH_MSG:string = "Errore durante il caricamento degli articoli del blog. Se il problema persiste contatta l'amministratore del sito";

    constructor(data: BlogRequestType){
        this._url = data.url;
    }

    get articles(){ return this._articles; }
    get url(){ return this._url; }
    get errno(){ return this._errno; }
    get error(){
        switch(this._errno){
            case BlogRequest.ERR_FETCH:
                this._error = BlogRequest.ERR_FETCH_MSG;
                break
            default:
                this._error = null;
                break;
        }
        return this._error;
    }

    public async getArticles(): Promise<{[index: string]: any}>{
        let response: object = {}
        this._errno = 0;
        try{
            await this.getArticlesPromise().then(res => response = JSON.parse(res))
        }catch(e){
            this._errno = BlogRequest.ERR_FETCH;
            response = {done: false, message: this.error}
        }
        return response
    }

    private async getArticlesPromise(): Promise<string>{
        return await new Promise<string>((resolve,reject)=>{
            axios.get(this._url)
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }

}