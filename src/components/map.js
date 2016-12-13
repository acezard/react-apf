import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'

class MapView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Map center={this.props.location} zoom={13} style={{height: '500px'}} className={this.props.className}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={this.props.location}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

function mapStateToProps({ location }) {
  return { location }
}

export default connect(mapStateToProps)(MapView)