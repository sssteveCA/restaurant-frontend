
export default class DishesRequest{

    private _dishes: any[] = [];
    private _errno: number = 0;
    private _error: string|null = null;

    get dishes(){ return this._dishes; }
    get errno(){ return this._errno; }
    get error(){
        switch(this._errno){
            default:
                this._error = null;
                break;
        }
        return this._error;
    }

}