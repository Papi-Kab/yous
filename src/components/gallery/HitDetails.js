import React, { Component } from "react";
import axios from "axios";
import HitItem from "./HitItem";
import withRouter from "../withRouter";

class HitDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hit: null,
    };
  }

  getHits(id) {
    let url =
      "https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&id=" + id;
    axios
      .get(url)
      .then((response) => {
        this.setState({
          hit: response.data.hits[0],
          //totalPages//Ici ca comprend qu'il doit directement assigner totalPages à totalPages du state car ils ont les même nom sinon on peut toujoour l'assigner comme on le fait d'habitude
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getHits(this.props.params.id);
  }

  render() {
    if (this.state.hit != null)
      return <HitItem hit={this.state.hit} detail={true} />;
    else {
      return <h1>Aucun elément trouvé</h1>;
    }
  }
}
export default withRouter(HitDetails);
