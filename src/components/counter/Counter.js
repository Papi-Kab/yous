// taper rcc pour avoir la suggestion du sequelle de la classe
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      list: [0]
    };
  }

  compute=(operator) => {
    let sign = operator==='+' ? 1 : -1;
    if(this.state.counter==1 && operator ==='-') sign = 0;
    let c = this.state.counter + sign;
    this.setState({
      counter: c,
      list: new Array(c).fill(0) // on cree un tableau de taille c remplit avec des 0
    }

    );
  }

  render() {
    return (
      <div className="card m-3">  
        <div className="card-header">
          <strong>
            {this.props.title}: {this.state.counter}
          </strong>
        </div>
        <div className="ml-auto">
            <button onClick={()=>this.compute('+')} className="btn btn-primary m-2">+</button>
            <button onClick={()=>this.compute('-')} className="btn btn-primary m-2">-</button>
        </div>
        <div className="card-body">
          {
            this.state.list.map((value, index)=>
            <span>
              {index}
              <img width={100} src={this.props.image}/>
            </span>
            )
          }
          
        </div>
      </div>
    )
  }
}
