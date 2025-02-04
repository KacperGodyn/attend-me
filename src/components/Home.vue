<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const handleSubmit = (e: Event) => {
  e.preventDefault()
  console.log('Logging in with:', {
    username: username.value,
    password: password.value,
  })
  // api will be here
}
</script>

<template>
  <div class="home">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Nazwa użytkownika</label>
        <input type="text" id="username" v-model="username" placeholder="Wprowadź swój login" />
      </div>
      <div class="form-group">
        <label for="password">Hasło</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Wprowadź swoje hasło"
        />
      </div>
      <div class="form-group">
        <button type="submit">Zaloguj</button>
      </div>
    </form>
  </div>
</template>

<style>
.main {
  min-height: 100vh;
  background-color: #181818;
}

form {
  background: #222222;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  background-color: #282828;
}

button {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #2779bd;
}
</style>
