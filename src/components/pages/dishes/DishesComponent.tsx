import React, { Component } from 'react'
import TitleComponent from '../../partials/text/title/TitleComponent'
import SearchInputComponent from '../../partials/form/searchinput/SearchInputComponent'
import Types from '../../../constants/types'
import DisheItemComponent from '../../partials/dishes/item/DishItemComponent'
import { DishesRequest, DishesRequestType } from '../../../requests/dishes_request'
import MessageComponent from '../../partials/text/message/MessageComponent'
import { Keys } from '../../../constants/keys'
import { Paths } from '../../../constants/paths'
import SpinnerComponent from '../../partials/spinner/SpinnerComponent'

export default class DishesComponent extends Component<any,Types.DishesState> {

    constructor(props: any){
        super(props)
        this.state = {
            dishes: [], match_dishes: [], message: '', query: '', spinner_show: false
        }
        this.onSearchInputChange = this.onSearchInputChange.bind(this)
    }

    componentDidMount(): void {
        let dr_data: DishesRequestType = {
            url: Paths.URL_BASE+Paths.URL_DISHES_ALL
        }
        let dr: DishesRequest = new DishesRequest(dr_data);
        this.setState({spinner_show: true})
        dr.getDishes().then(obj => {
            this.setState({spinner_show: false})
            if(obj[Keys.KEY_DONE]){
                this.setState({dishes: obj['dishes']})
            }
            else this.setState({message: obj[Keys.KEY_MESSAGE] as string})
        })
    }

    /**
     * Handle the value of the SearchInput child component when changes
     * @param query 
     */
    onSearchInputChange(query: string): void{
        this.setState({query: query})
        let match_dishes = this.state.dishes.filter(dish => (dish['name'] as string).startsWith(query))
        this.setState({match_dishes: match_dishes}) 
    }

  render() {
    return (
        <>
            <TitleComponent title='Pietanze' />
            <SearchInputComponent onFieldInput={this.onSearchInputChange} query={this.state.query} />
            <SpinnerComponent visible={this.state.spinner_show} />
            <MessageComponent message={this.state.message} />
            {
                this.state.match_dishes.map((dish,i) => <DisheItemComponent key={i} /> )
            }
        </>
    )
  }
}
