import React, { Component } from 'react'
import axios from 'axios';
import HitItem from './HitItem';
import SearchHitForm from './SearchHitForm';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits:[],
      currentPage: 1,
      pageSize: 10,
      currentKeyword: '',
      totalPages: 1,
      pages: []
    };
  }

  componentDidMount() {
    // this.getHits();
  }
  
  getHits(keyWord){
    let url="https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q=" + keyWord
           + "&page=" + this.state.currentPage +"&per_page=" + this.state.pageSize;
    axios.get(url).then((response) => {
      // console.log(response)
      let totalP = (response.data.totalHits%this.state.pageSize === 0) 
      ? response.data.totalHits/this.state.pageSize : (Math.floor(response.data.totalHits/this.state.pageSize)+1);

      this.setState({
        hits: response.data.hits,
        totalPages: totalP,
        pages: new Array(totalP).fill(0),
        currentKeyword: keyWord
        //totalPages//Ici ca comprend qu'il doit directement assigner totalPages à totalPages du state car ils ont les même nom sinon on peut toujoour l'assigner comme on le fait d'habitude
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  

  search=(keyWord)=>{
    // event.preventDefault();
    // this.setState({
    //   currentKeyword: keyWord
    // }, ()=>{
    //   this.getHits();
    // })

    this.setState({
      currentPage: 1,
      pages: []
    }, ()=>{
      this.getHits(keyWord);
    })
    
    
  }

  gotoPage=(page, keyword)=>{
    this.setState({
      currentPage: page
    }, ()=>{
      this.getHits(keyword);
    })
  }

  render() {
    return (
      <div>
        <SearchHitForm onSearch={this.search}/>
        <div className="row">
        {
          this.state.hits.map(hit => 
            <HitItem hit={hit} detail={false} key={hit.id}/>
          )
        }
        </div>
        <div>
          <ul className="nav nav-pills">
            {
              this.state.pages.map((v, index) =>
                <li key={index}>
                  <button className={this.state.currentPage===index+1 ? "btn btn-primary" : "btn btn-link"} onClick={()=>this.gotoPage(index+1, this.state.currentKeyword)}>{index+1}</button>
                </li>
              )
            }
          </ul>
        </div>
        
      </div>
    )
  }
}
