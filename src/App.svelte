<script lang="ts">
  import Map from "./lib/Map.svelte";
  import Menu from "./lib/Menu.svelte";
  import type { markerItem } from "./types/markerItem";

  let markerList: markerItem[] = $state([
    { name: "Alicante", lat: 38.3452, lng: -0.481005 }
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

    const newmarker: markerItem = {
      name: newName,
      lat,
      lng,
    };
    markerList = [...markerList, newmarker];
  };

  const handleDeleteMarker = (markerItem: markerItem) => {
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
