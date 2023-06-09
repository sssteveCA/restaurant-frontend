import React, { Component, SyntheticEvent } from 'react'
import Types from '../../../../constants/types'
import './SearchInputComponent.sass'

export default class SearchInputComponent extends Component<Types.SearchInputProps, any> {

    constructor(props: Types.SearchInputProps){
        super(props)
        this.onFieldInput = this.onFieldInput.bind(this)
    }

    componentDidMount(): void {
        setTimeout(() => {
            document.getElementById('form-search-input')?.classList.add('my-transition')
        },100)
    }

    /**
     * Handle the input value changes
     * @param e 
     */
    onFieldInput(e: SyntheticEvent): void{
        const query: string = (e.target as HTMLInputElement).value
        this.props.onFieldInput(query)
    }

  render() {
    return (
      
<form id='form-search-input' className='w-2/3 mx-auto'>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Cerca</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Inserisci pietanza" value={this.props.query} required onInput={this.onFieldInput} />
    </div>
</form>

    )
  }
}
