<script lang="ts">
  import "maplibre-gl/dist/maplibre-gl.css";
  import { onMount } from "svelte";
  import maplibregl from "maplibre-gl";
  import type { markerItem } from "../types/markerItem";

  let { markerList, onDeleteMarker } = $props<{
    markerList: markerItem[];
    onDeleteMarker: (marker: markerItem) => void;
  }>();

  let mapContainer: HTMLDivElement;
  let map: maplibregl.Map;
  let markers: maplibregl.Marker[] = [];

  const clearMarkers = () => {
    markers.forEach((marker) => marker.remove());
    markers = [];
  };

  const addMarkers = () => {
    markerList.forEach((markerItem: markerItem) => {
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

    map.on("load", () => {
      addMarkers();
    });

    return () => {
      clearMarkers();
      map.remove();
    };
  });

  $effect(() => {
    $inspect(markerList);
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
    border-radius: 1em;
  }
</style>
