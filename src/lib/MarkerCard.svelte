<script lang="ts">
  import type { MarkerItem } from "../types/MarkerItem";
  import { Trash } from "@lucide/svelte";
  import { slide } from "svelte/transition";
  let { markerItem, onDeleteMarker } = $props<{
    markerItem: MarkerItem;
    onDeleteMarker: (marker: MarkerItem) => void;
  }>();

  const getMapThumbnail = (lat: number, lng: number) => {
    const zoom = 14;
    const x = Math.floor((lng + 180) / 360 * Math.pow(2, zoom));
    const y = Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
    return `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`;
  };
</script>

<div class="marker-card" transition:slide>
  <div class="marker-contents">
    <span
      class="marker-image"
      role="img"
      style="background-image: url({getMapThumbnail(
        markerItem.lat,
        markerItem.lng
      )})"
    ></span>
    <div>
      <h3 class="marker-name">{markerItem.name}</h3>
      <p class="marker-info">
        <strong>lat:</strong>&nbsp;{markerItem.lat},
        <strong>lon:</strong>&nbsp;{markerItem.lng}
      </p>
    </div>
  </div>
  <div class="marker-actions">
    <button
      type="button"
      aria-label="Delete {markerItem.name}"
      onclick={() => onDeleteMarker(markerItem)}
    >
      <Trash size="16" />
    </button>
  </div>
</div>

<style>
  .marker-card {
    position: relative;
    margin-bottom: 0.66em;
    background-color: white;
    border-radius: 0.66em;
    box-shadow: 0 0.3em 0.3em rgb(0 0 0 / 5%);
    overflow: hidden;
  }

  .marker-contents {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.2em;
    gap: 0.66em;
  }

  .marker-image {
    min-width: 128px;
    min-height: 72px;
    background-size: cover;
    background-position: center;
    border-radius:0.5em 0 0;
  }

  .marker-actions {
    padding: 0.33em 0.66em 0.2em;
    background-color: white;
    border-top: 1px dashed #ccc;
  }

  .marker-name {
    margin: 0;
    color: #333;
    font-size: 1em;
    font-weight: bold;
  }

  .marker-info {
    margin: 0;
    color: #969696;
    font-size: 0.75em;
  }

  .marker-card button {
    background: none;
    border: none;
    color: #c00;
    opacity: 0.5;
    cursor: pointer;
  }

  .marker-card button:hover {
    opacity: 1;
  }
</style>
