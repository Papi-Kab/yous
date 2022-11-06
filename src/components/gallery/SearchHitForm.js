import React, { Component } from 'react'

export default class SearchHitForm extends Component {
    constructor(props){
        super(props);
        this.state={
            keyWordValue: ''
        }
    }

    setKeyword=(event)=>{
        this.setState({
            keyWordValue: event.target.value
        })
      }
    
    doSearch=(event)=>{
        event.preventDefault();
        this.props.onSearch(this.state.keyWordValue)
    }

  render() {
    return (
        <form onSubmit={this.doSearch}>
        <div className="row mb-4 mt-4">
          <div className="col">
            <input 
              type='text' 
              className='form-control' 
              value={this.state.keyWordValue} 
              placeholder='keyWord' 
              onChange={this.setKeyword}/>
          </div>
          <div className="col col-auto">
            <button className='btn btn-success' type='submit'> Chercher</button>
          </div>
        </div>
      </form>
    )
  }
}
