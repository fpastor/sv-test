<script lang="ts">
  import Map from "./lib/Map.svelte";
  import Menu from "./lib/Menu.svelte";
  import { Menu as LucideMenu } from "@lucide/svelte";
  import type { MarkerItem } from "./types/MarkerItem";

  let sidebarCollapsed = $state(false);

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
    { name: "Las Palmas", lat: 28.1235, lng: -15.4363 },
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

<div id="app-container" class:sidebar-collapsed={sidebarCollapsed}>
  <aside class="sidebar">
    <Menu {markerList} onDeleteMarker={handleDeleteMarker} />
  </aside>

  <main>
    <button
      class="toggle-sidebar"
      type="button"
      aria-label="Toggle Sidebar"
      onclick={() => (sidebarCollapsed = !sidebarCollapsed)}
      ><LucideMenu color="white" /></button
    >

    <Map
      {markerList}
      onAddMarker={handleAddMarker}
      onDeleteMarker={handleDeleteMarker}
    />
  </main>
</div>

<style>
  #app-container {
    display: grid;
    grid-template-areas: "sidebar main";
    grid-template-columns: 300px 1fr;
    height: 100vh;
    box-sizing: border-box;
    transition: grid-template-columns 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  #app-container.sidebar-collapsed {
    grid-template-columns: 0 1fr;
  }

  .sidebar {
    grid-area: sidebar;
    max-height: 100%;
    padding: 0;
    background-color: #4d4d4d;
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: scroll;
  }

  #app-container.sidebar-collapsed .sidebar {
    opacity: 0;
  }

  main {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-area: main;
    width: 100%;
  }

  .toggle-sidebar {
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    background-color: #4d4d4d;
    border: none;
    border-radius: 100%;
    cursor: pointer;
  }
</style>
