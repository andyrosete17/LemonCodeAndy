<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let name: string = 'Lemoncodersss';
  export let age: number = 33;
  export let counter: number = 10;
  let address = '';

  const dispatch = createEventDispatcher();

  const handleClick = () => {
    dispatch('messageTest', Math.random().toString());
  };

  $: console.log(address);
</script>

<div>
  <p>Hello {name}</p>
  <p>{age}</p>
  <p>Counter {counter}</p>
  <button on:click={handleClick}>Click me!</button>
  <input bind:value={address} />
</div>
