<script lang="ts">
  import AlertBanner from "./AlertBanner.svelte";
  import type { MarkerItem } from "../types/MarkerItem";
  import MarkerCard from "./MarkerCard.svelte";

  let { markerList, onDeleteMarker } = $props<{
    markerList: MarkerItem[];
    onDeleteMarker: (marker: MarkerItem) => void;
  }>();

  const handleDeleteMarker = (markerItem: MarkerItem) => {
    onDeleteMarker(markerItem);
  };
</script>

{#if markerList.length === 0}
  <AlertBanner message="No hay elementos disponibles." />
{:else}
  {#each markerList as markerItem (markerItem.name)}
    <MarkerCard {markerItem} onDeleteMarker={handleDeleteMarker} />
  {/each}
{/if}
