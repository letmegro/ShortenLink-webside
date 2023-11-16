import { useRef, useState, useEffect } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_KEY || "";

