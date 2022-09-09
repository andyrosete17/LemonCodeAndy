<!-- esto sería el homologo del maps -->
<script lang="ts">
  import Demo from './demo.svelte';

  import Info from './info.svelte';

  let m = { x: 0, y: 0 };
  const handleOnMouseMove = (e: MouseEvent) => {
    m = {
      x: e.clientX,
      y: e.clientY,
    };
  };
</script>

<!-- {#each list as item, i (item)}
        {#if item !== 'Test'}
          <p>{i + 1}-{item}</p>
        {/if}
      {/each}
    </div>
    <button on:click={toogle}> Logout </button>
  {:else}
    <button on:click={toogle}> Login </button>
  {/if}
</main>

<style>
  h1 {
    color: red;
  }
</style> -->

<!-- <script lang="ts">
  import Info from './info.svelte';

  let counter = 0;

  $: {
    if (counter > 10) {
      counter = 0;
    }
    console.log(counter);
  }

  $: double = counter * 2;

  const user = {
    name: 'Lemon',
    age: 20,
    country: 'Cuba',
  };
</script>

<main>
  <h1>Counter! ===> {counter}</h1>
  <h2>Double Counter! ===> {double}</h2>
  <button on:click={() => counter++}>Click me!</button>

  <Info {...user} counter={counter} />
</main>

<style>
  h1 {
    color: red;
  }
</style> -->
<!-- <script lang="ts">
  let user = { loggedIn: false };
  const toogle = () => {
    user.loggedIn = !user.loggedIn;
  };

  let list: string[] = ['Lemon', 'Coders', 'Test'];
</script>

<main>
  {#if user.loggedIn}
    <h1>You are logged in!</h1>
    <div> -->

<!-- <div on:mousemove={handleOnMouseMove}>
  the mouse position is {m.x}
  {m.y}
</div> -->

<div>
  <!-- <Info
    on:messageTest={e => {
      console.log(e.detail);
    }} /> -->
  <Demo
    on:messageTest={e => {
      console.log(e.detail);
    }} />
</div>

<style>
  div {
    border: 1px solid red;
    width: 50vw;
    height: 50vh;
    margin: 20px;
  }
</style>
