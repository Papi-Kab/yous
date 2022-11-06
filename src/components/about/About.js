import React, { Component } from 'react'

export default class About extends Component {
constructor(props) {
  super(props);
  this.state = {
    competenceValue: '',
    title: "CV",
    contact:{
      name: 'Seydou TOLOBA',
      profile: 'images/profile.jpg',
      email: "stoloba@sitaninfo.com"
    },
    competences:[
      {
        id: 1,
        competence: 'Developperur WEB',
      },
      {
        id: 2,
        competence: 'Developperur PYTHON',
      },
      {
        id: 3,
        competence: 'Travail collaboratrice',
      }
  ]
  };
}
setCompetence=(event)=>{
  this.setState ({
    competenceValue: event.target.value
  })
}

addCompetence=(event)=>{
  event.preventDefault();
  let comp={
    id: [...this.state.competences].pop().id + 1,
    competence: this.state.competenceValue
  }
  this.setState({
    competences: [...this.state.competences, comp ]
  })
}

onDelete=(competence)=>{
  let index = this.state.competences.indexOf(competence);
  let listComp = [...this.state.competences];
  listComp.splice(index, 1)
  this.setState({
    competences: listComp,
  })
} 
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <strong><label>{this.state.title}</label></strong>
          </div>
          <div className="row p-2">
            <div className="col col-auto">
              <img width={100} src={this.state.contact.profile} alt="profile"/>
            </div>
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">{this.state.contact.name}</li>
                <li className="list-group-item">{this.state.contact.email}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card m-2">
          <div className="card-header">SKills</div>
          <div className="card-body">
            <form onSubmit={this.addCompetence}>
              <div className="row mb-2">
                <div className="col">
                  <input type="text" name="skill" value={this.state.competenceValue} onChange={this.setCompetence} placeholder="Nouvelle competence" className="p-1 "/>
                </div>
                <div className="col col-auto">
                <button className="btn btn-primary" type="submit">Add</button>
                </div>
                
              </div>
            </form>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Skills</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.competences.map((c, index)=>
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.competence}</td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>this.onDelete(c)}  >X</button>
                  </td>
                </tr>
                )
              }
              </tbody>
              
            </table>
          </div>
        </div>
      </div>
    )
  }
}
