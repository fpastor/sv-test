<script lang="ts">
  import type { MarkerItem } from "../types/MarkerItem";
  import { Trash } from "@lucide/svelte";
  import { slide } from "svelte/transition";
  let { markerItem, onDeleteMarker } = $props<{
    markerItem: MarkerItem;
    onDeleteMarker: (marker: MarkerItem) => void;
  }>();

  const getRandomPhoto = (lat: number, lng: number) => {
    const seed = Math.floor(Math.abs(lat * lng * 1000));
    return `https://picsum.photos/300/200?random=${seed}`;
  };
</script>

<div class="marker-card" transition:slide>
  <div class="marker-contents">
    <span
      class="marker-image"
      role="img"
      style="background-image: url({getRandomPhoto(
        markerItem.lat,
        markerItem.lng
      )})"
    ></span>
    <div>
      <h3 class="marker-name">{markerItem.name}</h3>
      <p class="marker-info">
        <strong>lat:</strong>&nbsp;{markerItem.lat}, <strong>lon:</strong>&nbsp;{markerItem.lng}
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
    border-radius: 0.66em;
    background-color: #f9f9f9;
    margin-bottom: 0.66em;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0.3em 0.3em rgba(0, 0, 0, 0.05);
  }

  .marker-contents {
    display: flex;
    flex-direction: row;
    gap: 0.66em;
    padding: 0.66em;
  }

  .marker-image {
    min-width: 56px;
    min-height: 56px;
    border-radius: 0.33em;
    background-size: cover;
    background-position: center;
  }

  .marker-actions {
    background-color: white;
    border-top: 1px dashed #ccc;
    padding: 0.33em 0.66em 0.20em;
  }

  .marker-name {
    font-size: 1em;
    color: #333;
    font-weight: bold;
    margin: 0;
  }

  .marker-info {
    margin: 0;
    font-size: 0.75em;
    color: #969696;
  }

  .marker-card button {
    background: none;
    border: none;
    cursor: pointer;
    color: #c00;
    opacity: 0.5;
  }

  .marker-card button:hover {
    opacity: 1;
  }
</style>
