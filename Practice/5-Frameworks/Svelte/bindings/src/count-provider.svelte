<script lang="ts">
  import { setContext } from 'svelte';
import { createCountStore } from './store';

  const countStore = createCountStore();
  setContext('my-count-context', 1);
</script>

<slot />
