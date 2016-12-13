import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLocation } from '../actions/index'
import { bindActionCreators } from 'redux'

class userForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: [],
      categories: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.getLoc = this.getLoc.bind(this)
    this.reset = this.reset.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.fetchLocation(this.state.location)
  }

  handleChange(e) {
    this.setState({location: e.target.value})
  }

  getLoc(e) {
    e.preventDefault()

    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      this.setState({location: [position.coords.latitude, position.coords.longitude]})
    })
  }

  displayCity() {
  }

  reset() {
    this.setState({location: []})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="inline">
      <div className="form-group">
        <label htmlFor="firstName">Votre localisation</label>
        <input name="userLoc" onChange={this.handleChange} value={this.state.location} type="text" className="form-control"/>
        <button className="btn btn-primary" onClick={this.getLoc}>Localisation</button>
      </div>
      <div>
        <button type="submit" disabled={this.state.location.length < 2} className="btn btn-default">Envoyer</button>
        <button type="button" className="btn btn-danger" onClick={this.reset}>Remettre à zéro</button>
      </div>
    </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLocation }, dispatch)
}

export default connect(null, mapDispatchToProps)(userForm)