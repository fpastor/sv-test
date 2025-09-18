<script lang="ts">
  import "maplibre-gl/dist/maplibre-gl.css";
  import { onMount } from "svelte";
  import maplibregl from "maplibre-gl";
  import type { MarkerItem } from "../types/MarkerItem";

  let { markerList, onAddMarker, onDeleteMarker } = $props<{
    markerList: MarkerItem[];
    onAddMarker: (lat: number, lng: number) => void;
    onDeleteMarker: (marker: MarkerItem) => void;
  }>();

  let mapContainer: HTMLDivElement;
  let map: maplibregl.Map;
  let markers: maplibregl.Marker[] = [];

  const clearMarkers = () => {
    markers.forEach((marker) => marker.remove());
    markers = [];
  };

  const addMarkers = () => {
    markerList.forEach((markerItem: MarkerItem) => {
      const marker = new maplibregl.Marker()
        .setLngLat([markerItem.lng, markerItem.lat])
        .setPopup(new maplibregl.Popup().setText(markerItem.name))
        .addTo(map);
      markers.push(marker);
    });
  };

  onMount(() => {
    map = new maplibregl.Map({
      container: mapContainer,
      style: "https://demotiles.maplibre.org/style.json",
      center: [-3.7038, 40.4168],
      zoom: 5,
    });

    map.on("click", (e) => {
      const { lat, lng } = e.lngLat;
      onAddMarker(lat, lng);
    });

    map.on("load", () => {
      addMarkers();
    });

    return () => {
      clearMarkers();
      map.remove();
    };
  });

  $effect(() => {
    if (map && markerList) {
      clearMarkers();
      addMarkers();
    }
  });
</script>

<div id="map" bind:this={mapContainer}></div>

<style>
  #map {
    width: 100%;
    height: 100%;
  }
</style>
