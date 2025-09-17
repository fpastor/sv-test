
<script lang="ts">
  import { TriangleAlert } from "@lucide/svelte";
  export let message: string;
</script>

<style>
    .alert-banner {
        padding: 1em;
        text-align: center;
    }

    .icon {
        margin-bottom: 0.25em;
        color: rgba(255, 165, 0, 0.8);
    }
</style>

<div class="alert-banner">
    <div class="icon">
        <TriangleAlert size={48} />
    </div>
    {message}
</div>