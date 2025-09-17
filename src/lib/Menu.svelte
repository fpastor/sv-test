<script lang="ts">
  import { Trash, TriangleAlert } from "@lucide/svelte";
  import { slide } from "svelte/transition";
  import AlertBanner from "./AlertBanner.svelte";
  import type { markerItem } from "../types/markerItem";

  let { markerList, onDeleteMarker } = $props<{
    markerList: markerItem[];
    onDeleteMarker: (marker: markerItem) => void;
  }>();

  const handleDeleteMarker = (markerItem: markerItem) => {
    // const confirmed = confirm(
    //   `Are you sure you want to delete ${markerItem.name}?`
    // );
    // if (confirmed) {
      onDeleteMarker(markerItem);
    // }
  };
</script>

<menu>
  {#if markerList.length === 0}
    <AlertBanner message="No hay elementos disponibles." />
  {:else}
    <ul>
      {#each markerList as markerItem (markerItem.name)}
        <li transition:slide>
          {markerItem.name}
          <button
            type="button"
            aria-label="Delete {markerItem.name}"
            onclick={() => handleDeleteMarker(markerItem)}
          >
            <Trash />
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</menu>
