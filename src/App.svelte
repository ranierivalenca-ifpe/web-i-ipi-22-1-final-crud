<script>
  import Home from "./lib/Home.svelte";
  import Register from "./lib/Register.svelte";
  import Login from "./lib/Login.svelte";
  import { currentPage, currentUser } from "./stores";
</script>

<main>
  <h1>My app</h1>
  <nav>
    <div on:click={() => ($currentPage = "home")}>Home</div>
    {#if !$currentUser}
      <div on:click={() => ($currentPage = "register")}>Cadastrar</div>
      <div on:click={() => ($currentPage = "login")}>Login</div>
    {:else}
      <div on:click={() => ($currentUser = null)}>Logout</div>
    {/if}
  </nav>
  <div>
    {#if $currentPage == "home"}
      <Home />
    {:else if $currentPage == "register"}
      <Register />
    {:else if $currentPage == "login"}
      <Login />
    {/if}
  </div>
</main>

<style>
  nav {
    display: flex;
    gap: 0.5em;
    justify-content: space-between;
  }
  nav > div {
    border: 1px solid black;
    padding: 0 1em;
    cursor: pointer;
  }
</style>
