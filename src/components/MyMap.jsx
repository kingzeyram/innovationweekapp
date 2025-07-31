import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MyMap = () => {
    return (


        <MapContainer
            center={[-1.286389, 36.817223]} // Nairobi coordinates
            zoom={11}
            scrollWheelZoom={true}
            style={{ height: '300px', width: '75%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-1.230643, 36.878174]}>
                <Popup>
                    KCA University, Ruaraka, Nairobi
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MyMap;
