<script lang="ts">
  import Map from "./lib/Map.svelte";
  import Menu from "./lib/Menu.svelte";
  import type { MarkerItem } from "./types/MarkerItem";

  let markerList: MarkerItem[] = $state([
    { name: "Alicante", lat: 38.3452, lng: -0.481005 },
    { name: "Madrid", lat: 40.4168, lng: -3.7038 },
    { name: "Barcelona", lat: 41.3851, lng: 2.1734 },
    { name: "Valencia", lat: 39.4699, lng: -0.3763 },
    { name: "Sevilla", lat: 37.3891, lng: -5.9845 },
    { name: "Zaragoza", lat: 41.6488, lng: -0.8891 },
    { name: "Málaga", lat: 36.7213, lng: -4.4216 },
    { name: "Murcia", lat: 37.9922, lng: -1.1307 },
    { name: "Palma", lat: 39.5696, lng: 2.6502 },
    { name: "Las Palmas", lat: 28.1235, lng: -15.4363 }
  ]);

  const checkNewName = (newName: string) => {
    return !markerList.some((marker) => marker.name === newName);
  };

  const handleAddMarker = (lat: number, lng: number) => {
    let newName: string | null = "";
    do {
      newName = prompt(
        "Enter a unique name for the new marker:",
        `Marker ${markerList.length + 1}`
      );

      if (newName === null) {
        return;
      }

      if (!checkNewName(newName)) {
        alert("The name already exists. Please choose a different name.");
      }
    } while (!checkNewName(newName));

    const newmarker: MarkerItem = {
      name: newName,
      lat,
      lng,
    };
    markerList = [...markerList, newmarker];
  };

  const handleDeleteMarker = (markerItem: MarkerItem) => {
    markerList = markerList.filter((item) => item !== markerItem);
  };
</script>

<sidebar>
  <Menu {markerList} onDeleteMarker={handleDeleteMarker} />
</sidebar>

<main>
  <Map
    {markerList}
    onAddMarker={handleAddMarker}
    onDeleteMarker={handleDeleteMarker}
  />
</main>
