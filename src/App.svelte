<script lang="ts">
  import Map from './lib/Map.svelte';
  import Menu from './lib/Menu.svelte';
  import type { markerItem } from './types/markerItem';

  let markerList: markerItem[] = $state([
    { name: "Alicante", lat: 38.3452, lng: -0.481005},
    { name: "Madrid", lat: 40.4168, lng: -3.7038},
    { name: "Barcelona", lat: 41.3851, lng: 2.1734},
    { name: "Valencia", lat: 39.4699, lng: -0.3763},
    { name: "Sevilla", lat: 37.3891, lng: -5.9845}
  ]);

  function handleDeleteMarker(markerItem: markerItem) {
    markerList = markerList.filter((item) => item !== markerItem);
  }

</script>

<sidebar>
  <Menu {markerList} onDeleteMarker={handleDeleteMarker} />
</sidebar>

<main>
  <Map {markerList} onDeleteMarker={handleDeleteMarker} />
</main>

