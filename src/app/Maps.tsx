'use client'
import { useRef, useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import pin from 'public/images/building.png';
import mapIcon from 'public/images/map-icon.png';
import L from "leaflet";


export default function MyMap() {
  
  return <MapContainer  id="map" center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true} style={{height: '100%', width: '100%'}}>
            <TileLayer
              attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              minZoom={2}
              maxZoom={20}
            />
            
            <Marker position={[51.505, -0.09]} icon={L.icon({
              iconUrl: pin.src,
              iconSize: [24, 24]
            })}>
              
              <Popup>
                <p className="flex  flex-col items-center ">
                  Shortly HQ: 1520 No where Ave.
                  <a href={"//" + process.env.NEXT_PUBLIC_LOCATION_1} target="_blank" ><img alt="directions" className="md:w-[16px] md:h-[16px]" src={mapIcon.src}></img></a>
                </p>
              </Popup>
            </Marker>
        </MapContainer>
        // <a href="https://www.freepik.com/icon/building_5023271#fromView=keyword&term=Building&page=1&position=47&uuid=5693a443-1a1e-4fcd-83d0-af321449d250">Icon by vanda arief</a>
        // ToDo: find a way to add attribute to the icon used as marker
}

