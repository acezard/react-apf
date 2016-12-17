import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'
import { mapCenter } from '../actions/index'
import { bindActionCreators } from 'redux'

class MapView extends Component {
  printLocations() {
    return this.props.locations.map(location => {
      const coords = [location.fields["field_address:latitude"], location.fields['field_address:longitude']]

      return (
        <Marker position={ coords } key={location.id}>
          <Popup>
            <span>{location.fields["field_address:name"]}</span>
          </Popup>
        </Marker>
      )
    })
  }

  componentDidMount() {
    const map = this.refs.map.leafletElement

    let timer

    document.addEventListener("mousedown", () => {
      timer = setInterval(() => {
        this.props.mapCenter(map.getCenter())
      }, 100)
    })

    document.addEventListener("mouseup", () => {
      if (timer) clearInterval(timer)
    })

    map._handlers.forEach(function(handler) {
      handler.disable()
    })
  }

  componentDidUpdate() {
    const map = this.refs.map.leafletElement

    if (this.props.location) {
      map._handlers.forEach(function(handler) {
        handler.enable()
      })
    }
  }

  render() {
    return (
      <Map center={this.props.location || [48.8566, 2.3522]} zoom={12} style={{height: '500px'}} className={this.props.className} ref="map">
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {this.props.location &&
          <Marker position={ this.props.location }>
            <Popup>
              <span>Votre position</span>
            </Popup>
          </Marker>
        }

        {this.props.submitted &&
          this.printLocations()
        }
      </Map>
    )
  }
}

function mapStateToProps({ location }) {
  return { location }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ mapCenter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView)