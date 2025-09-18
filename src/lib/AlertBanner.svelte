<script lang="ts">
  import { TriangleAlert } from "@lucide/svelte";
  export let message: string;
</script>

<div class="alert-banner">
  <div class="alert-banner-wrapper">
    <div class="icon">
      <TriangleAlert size={48} />
    </div>
    {message}
  </div>
</div>

<style>
  .alert-banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .alert-banner-wrapper {
    padding: 1em;
    text-align: center;
    color: #999;
    align-self: center;
  }

  .icon {
    margin-bottom: 0.25em;
    color: #fbff53;
  }
</style>
