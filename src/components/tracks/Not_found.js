import React, { Component } from 'react'

import { Link } from "react-router-dom";

class Not_found extends Component {
  render() {
    return (
      <React.Fragment>
      <Link to="/" className="btn btn-dark btn-sm mb-4">Go back</Link>
      <div className="card">
               <h5 className="card-header">
                  Lyrics Not Found. Server Error
                  </h5>
            </div>
      </React.Fragment>
    )
  }
}

export default Not_found;