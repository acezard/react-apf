import React, { Component } from 'react'
import UserForm from './userForm'
import Map from './map'
import CategoryList from './category-list'
import { connect } from 'react-redux'
import ComputedListSelector from '../selectors/computed_list'

class App extends Component {
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

        <div className="panel panel-default row map">
          <div className="panel-heading col-md-12">
            <h3 className="panel-title">Carte</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-6">
              <Map locations={this.props.locationsList} submitted={this.props.submitted}/>
            </div>
            <div className="col-md-6">
              <CategoryList className="list-group" locations={this.props.locationsList}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    locationsList: ComputedListSelector(state),
    submitted: state.submitted
  }
}

export default connect(mapStateToProps)(App)