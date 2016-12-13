import React, { Component } from 'react'
import UserForm from './userForm'
import Map from './map'
import CategoryList from './category-list'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Module APF</h1>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Vos informations</h3>
          </div>
          <div className="panel-body">
            <UserForm />
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Carte</h3>
          </div>
          <div className="panel-body row">
            <Map className="col-md-6"/>
            <CategoryList className="col-md-6"/>
          </div>
        </div>
      </div>
    )
  }
}
