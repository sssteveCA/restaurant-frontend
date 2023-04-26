import React, { Component } from 'react'
import TitleComponent from '../../partials/text/title/TitleComponent'
import SearchInputComponent from '../../partials/form/searchinput/SearchInputComponent'
import Types from '../../../constants/types'
import DisheItemComponent from '../../partials/dishes/item/DishItemComponent'

export default class DishesComponent extends Component<any,Types.DishesState> {

    constructor(props: any){
        super(props)
        this.state = {
            dishes: [], query: ''
        }
        this.onSearchInputChange = this.onSearchInputChange.bind(this)
    }

    onSearchInputChange(query: string): void{
        this.setState({query: query})
    }


  render() {
    return (
        <>
            <TitleComponent title='Pietanze' />
            <SearchInputComponent onFieldInput={this.onSearchInputChange} query={this.state.query} />
            {
                this.state.dishes.map((dish,i) => <DisheItemComponent /> )
            }
        </>
    )
  }
}
