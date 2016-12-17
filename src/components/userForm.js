import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { fetchLocation, submitForm } from '../actions/index'
import { bindActionCreators } from 'redux'
import Location from 'react-place'

class userForm extends Component {
  state = {
    location: [],
    categories: []
  }

  handleSubmit = e => {
    if (e) e.preventDefault()

    this.props.fetchLocation(this.state.location)
    this.props.submitForm(true)
  }

  handleChange = e => {
    this.setState({location: e.target.value})
  }

  getLoc = e => {
    e.preventDefault()

    navigator.geolocation.getCurrentPosition(position => {
      this.setState({location: [position.coords.latitude, position.coords.longitude]})

      this.handleSubmit()
    })
  }

  onLocationSet = data => {
    this.setState({location: [data.coords.lat, data.coords.lng]})
  }

  reset = () => {
    this.setState({location: []})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="inline">
      <div className="form-group">
        <label htmlFor="firstName">Votre localisation</label>
        <span ref="awesomeplete" className="awesomeplete">
          <Location
            country='FR'
            noMatching='Sorry, I can not find {{value}}.'
            onLocationSet={ this.onLocationSet }
            inputProps={{
              style: {color: '#0099FF'},
              className:'form-control',
              placeholder: 'Je saisis ma localisation'
            }}/>
        </span>
        <span> Ou bien j'utilise la </span>
        <button className="btn btn-primary" onClick={this.getLoc}>Localisation automatique</button>
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
  return bindActionCreators({ fetchLocation, submitForm }, dispatch)
}

export default connect(null, mapDispatchToProps)(userForm)