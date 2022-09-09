<script lang="ts">
  import { getContext } from 'svelte';
  import { countStore, createCountStore } from './store';
  const countStore = getContext<ReturnType<typeof createCountStore
</script>

<button on:click={() => countStore.increment()}>Increment</button>
