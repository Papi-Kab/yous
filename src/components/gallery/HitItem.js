import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HitItem extends Component {

  render() {
    return (
      <div
        className={this.props.detail === false ? "col-md-4 m-2" : "m-2"}
        key={this.props.hit.id}
      >
        <div className="card">
          <div className="card-header">
            {this.props.detail === false
              ? this.props.hit.tags +
                " | " +
                this.props.hit.webformatWidth +
                " x " +
                this.props.hit.webformatHeight
              : "Détails | " +
                this.props.hit.imageWidth +
                " x " +
                this.props.hit.imageHeight}
          </div>
          <div className="card-body">
            {this.props.detail === false ? (
              <img
                alt="content"
                className="card-img"
                height={200}
                src={this.props.hit.webformatURL}
              />
            ) : (
              <img
                className="card-img"
                alt="content"
                src={this.props.hit.largeImageURL}
              />
            )}
          </div>
          {this.props.detail === false ? (
            <div className="m-2">
              <Link
                className="btn btn-success"
                to={"/gallery/" + this.props.hit.id}
                key={this.props.hit.id}
              >
                Détails
              </Link>
            </div>
          ) : (
            <div>
              <div className="row m-2">
                <div className="col-auto">
                  <img
                    src={this.props.hit.userImageURL}
                    alt="user"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">
                      Views: <strong>{this.props.hit.views}</strong>
                    </li>
                    <li className="list-group-item">
                      Comments: <strong>{this.props.hit.comments}</strong>
                    </li>
                    <li className="list-group-item">
                      Download: <strong>{this.props.hit.downloads}</strong>
                    </li>

                    <li className="list-group-item">
                      Likes: <strong>{this.props.hit.likes}</strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row m-2">
                <div className="mt-2">
                  <Link
                    className="btn btn-primary"
                    to={"/gallery"}
                    key={this.props.hit.id}
                  >
                    Retour
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
