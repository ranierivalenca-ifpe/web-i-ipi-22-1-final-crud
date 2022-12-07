<script>
  import { users } from "../stores";


  const form = {
    username: "",
    pw: "",
  };

  const addUser = () => {
    // $users = $users.concat({ ...form })
    $users = $users.concat({ 
        username: form.username,
        pw: form.pw
     });
  };
</script>

<form on:submit|preventDefault={addUser}>
  <fieldset>
    <legend>Cadastro</legend>
    <input type="text" name="username" bind:value={form.username} placeholder="username" />
    <input type="password" name="pw" bind:value={form.pw} placeholder="password" />
    <button>Cadastrar</button>
  </fieldset>
</form>

<style>
  form {
    margin-top: 2em;
  }
</style>
