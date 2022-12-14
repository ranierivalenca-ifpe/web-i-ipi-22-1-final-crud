<script>
  import { currentUser, products, addProduct, removeProduct } from "../stores";

  const form = {
    name: "",
  };

  function handleForm() {
    addProduct(form.name, $currentUser.id)

    form.name = '';
  }

  function remove(id) {
    removeProduct(id, $currentUser.id)
  }
</script>

{#if $currentUser}
  <div>
    <h2>Produtos</h2>
    {#each $products as prod}
        <div>{prod.name} <a href="#" on:click|preventDefault={() => remove(prod.id)}>remover</a></div>
    {/each}
    <form on:submit|preventDefault={handleForm}>
      <fieldset>
        <legend>Adicionar produto</legend>
        <input
          type="text"
          name="name"
          bind:value={form.name}
          placeholder="nome do produto"
          required
        />
        <button>Adicionar</button>
      </fieldset>
    </form>
  </div>
{/if}
