<script lang="ts">
  import { TriangleAlert } from "@lucide/svelte";
  export let message: string;
</script>

<div class="alert-banner-wrapper">
  <div class="alert-banner">
    <div class="icon">
      <TriangleAlert size={48} />
    </div>
    {message}
  </div>
</div>

<style>
  .alert-banner-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .alert-banner {
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
