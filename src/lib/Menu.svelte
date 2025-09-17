<script lang="ts">
  import { Trash, TriangleAlert } from '@lucide/svelte';
  import { slide } from "svelte/transition";
  import AlertBanner from './AlertBanner.svelte';

  type menuItem = {
    name: string;
    url: string;
  };

  let menuItems: menuItem[] = $state([
    { name: "Punto 1", url: "/item-1" },
    { name: "Punto 2", url: "/item-2" },
    { name: "Punto 3", url: "/item-3" },
  ]);

  const handleInfo = (menuItem: menuItem) => {
    alert(`You clicked on ${menuItem.name}`);
  };

  const handleDelete = (menuItem: menuItem) => {
    const confirmed = confirm(
      `Are you sure you want to delete ${menuItem.name}?`
    );
    if (confirmed) {
      deleteMenuItem(menuItem);
    }
  };

  const deleteMenuItem = (menuItem: menuItem) => {
    menuItems = menuItems.filter((item) => item !== menuItem);
  };
</script>

<menu>
  {#if menuItems.length === 0}
      <AlertBanner message="No hay elementos disponibles." />
  {:else}
  <ul>
    {#each menuItems as menuItem (menuItem.name)}
      <li transition:slide>
        <a
          href={menuItem.url}
          onclick={(event) => {
            event.preventDefault();
            handleInfo(menuItem);
          }}
        >
          {menuItem.name}
        </a>
        <button
          type="button"
          aria-label="Delete {menuItem.name}"
          onclick={() => deleteMenuItem(menuItem)}
        >
          <Trash />
        </button>
      </li>
    {/each}
  </ul>
  {/if}
</menu>
