<script>
  import 'maplibre-gl/dist/maplibre-gl.css';
  import { onMount } from 'svelte';
  import maplibregl from 'maplibre-gl';

  /**
   * @type {HTMLDivElement}
   */
  let mapContainer;

  onMount(() => {
    const map = new maplibregl.Map({
      container: mapContainer,
      style: "https://demotiles.maplibre.org/style.json",
      center: [-3.7038, 40.4168],
      zoom: 5,
    });

    return () => {
      map.remove();
    };
  });
</script>

<style>
  #map {
    width: 100%;
    height: 100%;
    border-radius: 1em;
  }
</style>

<div id="map" bind:this={mapContainer}></div>
