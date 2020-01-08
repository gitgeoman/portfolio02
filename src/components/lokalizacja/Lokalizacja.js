import React, {Component} from 'react';

//import bibliotek leaflet
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


//naprawa zwalonych ikonek
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });
        L.Marker.prototype.options.icon = DefaultIcon;

class LeafletMap extends Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
							      center: [52.338814, 21.250535],
							      zoom: 12,
							      layers: [
							        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
							          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							        }),
							      ]
    						}
    				);
        this.marker = L.marker([52.338814, 21.250535])
        			   .bindPopup('<span style="font-size:1rem">Tutaj nas znajdziesz!</span>')
        			   .openPopup()
        			   .addTo(this.map);

    };

  render() {
    return <div className='f2 w-100 pa2 vh-75' id="map"></div>
  }
}
export default LeafletMap;