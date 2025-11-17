// src/components/MapView.tsx
import { useEffect, useRef } from "react";
import maplibregl, { Map as MapLibreMap } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MapView = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapRef.current) return;

    const TORONTO_CENTER: [number, number] = [-79.3832, 43.6532];
    const TORONTO_ZOOM = 11;

    // Simple raster OSM style (roads, labels, everything)
    const style: any = {
      version: 8,
      sources: {
        "osm-tiles": {
          type: "raster",
          tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
          tileSize: 256,
          attribution: "© OpenStreetMap contributors",
        },
      },
      layers: [
        {
          id: "osm-tiles",
          type: "raster",
          source: "osm-tiles",
        },
      ],
    };

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style,
      center: TORONTO_CENTER,
      zoom: TORONTO_ZOOM,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "100%", outline: "none" }}
    />
  );
};

export default MapView;
