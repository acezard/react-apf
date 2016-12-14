import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'

class MapView extends Component {
  constructor(props) {
    super(props)
  }

  printLocations() {
    return this.props.locations.map(location => {
      const coords = [location.fields["field_address:latitude"], location.fields['field_address:longitude']]

      return (
        <Marker position={ coords } key={location.id}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      )
    })
  }

  render() {
    console.log(this.props.submitted)
    return (
      <Map center={this.props.location} zoom={13} style={{height: '500px'}} className={this.props.className}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={ this.props.location }>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>

        {this.props.submitted ? this.printLocations() : ''}
      </Map>
    )
  }
}

function mapStateToProps({ location }) {
  return { location }
}

export default connect(mapStateToProps)(MapView)