<template>
  <div class="bg-pink-light flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-pink-dark p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold text-center text-white">Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mt-4">
          <label class="block text-white" for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="mt-1 block w-full p-2 border border-pink-light rounded-md"
          />
        </div>
        <div class="mt-4">
          <label class="block text-white" for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="mt-1 block w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          class="mt-6 w-full bg-pink-500 text-white p-2 rounded-md hover:bg-pink-light"
        >
          Login
        </button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <p class="mt-4 text-center">
        Don't have an account? 
        <router-link to="/signup" class="text-white font-semibold">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PocketBase from 'pocketbase';
import { useRouter } from 'vue-router';
const pb = new PocketBase('http://147.182.203.225:8090');
const router = useRouter();

const email = ref('');
const password = ref('');
const errorMessage = ref('');

async function handleSubmit() {
  try {
    // Log in the user with PocketBase
    const authData = await pb.collection('users').authWithPassword(email.value, password.value);
    console.log('User  logged in:', authData);

    router.push('/dashboard');
  } catch (error) {
    errorMessage.value = error.message; // Capture and display error
    console.error('Login error:', error);
  }

};


</script>

<style scoped>
/* Add any additional styles here */
</style>