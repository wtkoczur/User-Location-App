import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'


const Location = ({place, name}) => {
    return (
        <div id="map" style={{ height: '180px', width: "40vw", margin: 10}}>
            <MapContainer
                style={{ height: 300, width: "auto" }}
                center={place}
                zoom={7}
                scrollWheelZoom={false}
      >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={place}>
                    <Popup>
                    {name}
                    </Popup>
                </Marker>
            </MapContainer>

            <Link to="/list" style={{textDecoration: 'none', color: "#000"}}>
             <p ><FontAwesomeIcon icon={faLongArrowAltLeft}></FontAwesomeIcon> <FontAwesomeIcon icon={faLongArrowAltLeft}></FontAwesomeIcon> Back to list</p>
            </Link>

        </div>

    )
}

export default Location;