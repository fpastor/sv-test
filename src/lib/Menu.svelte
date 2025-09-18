<script lang="ts">
  import type { MarkerItem } from "../types/MarkerItem";
  import AlertBanner from "./AlertBanner.svelte";
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
  <div class="marker-list">
    {#each markerList as markerItem (markerItem.name)}
      <MarkerCard {markerItem} onDeleteMarker={handleDeleteMarker} />
    {/each}
  </div>
{/if}

<style>
  .marker-list {
    padding: 0.66em;
  }
</style>
