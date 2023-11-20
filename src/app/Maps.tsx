'use client'
import { useRef, useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import pin from 'public/images/building.png';
import mapIcon from 'public/images/map-icon.png';
import londonHQ from 'public/images/london-hq.png';
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
                <div id="b-1" className=" flex-col justify-center items-center">
                  <p className="flex flex-col items-center ">
                    Shortly HQ: 1520 No where Ave.
                    {/*  */}
                  </p>
                  <div className="flex justify-center">
                    <div className="cursor-pointer group expand-1 max-w-fit w-[110px] h-[100px] flex items-center justify-center rounded-lg ">
                    <div className="border-2 border-slate-500 rounded-lg group-hover:hidden block w-[100px] h-[100px]  top-0 bottom-0 left-0 right-0"></div>
                      <div onClick={() => expand('back-1', 'b-1')} className="z-10 group-hover:block hidden w-[100px] h-[100px] bg-black bg-opacity-50 rounded-md top-0 bottom-0 left-0 right-0 ">
                        <p className=" text-white text-center pt-3 text-lg z-20">Expand</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="back-1"  className="hidden flex flex-col border-4 border-slate-500 rounded-md">
                  <div className="expand-1 w-[182px] h-[200px]"></div>
                  <div onClick={ () => expand('back-1', 'b-1')}  className="top-4 left-7 absolute px-3 py-2 bg-red rounded-xl m-1 text-white font-semibold opacity-40 hover:opacity-100 cursor-pointer transition duration-500 ">Back</div>
                  <a href={"//" + process.env.NEXT_PUBLIC_LOCATION_1} target="_blank" >
                    <div className="absolute bottom-4 right-7 text-white font-semibold px-3 py-2 bg-orange-500 rounded-xl m-3 cursor-pointer hover:bg-orange-400 transition duration-500a">
                      Directions
                    </div>
                  </a>
                  
                </div>
              </Popup>
            </Marker>
        </MapContainer>
        // <a href="https://www.freepik.com/icon/building_5023271#fromView=keyword&term=Building&page=1&position=47&uuid=5693a443-1a1e-4fcd-83d0-af321449d250">Icon by vanda arief</a>
        // ToDo: find a way to add attribute to the icon used as marker
}

function expand(btn: string, original: string){
  document.getElementById(btn)?.classList.toggle('hidden');
  document.getElementById(btn)?.classList.toggle('flex');
  document.getElementById(original)?.classList.toggle('hidden');
  document.getElementById(original)?.classList.toggle('flex');
}