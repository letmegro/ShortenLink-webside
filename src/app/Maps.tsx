import { useRef, useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function MyMap(props: any) {
  const { position, zoom } = props

  return <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true} style={{height: '100%', width: '100%'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      minZoom={2}
      maxZoom={20}
    />
    
    <Marker position={[51.505, -0.09]}>
      <Popup>
        a temporary test and placeholder
      </Popup>
    </Marker>
  </MapContainer>
}