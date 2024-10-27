<template>
    <div class="bg-pink-light flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-pink-dark p-8 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold text-center text-white">Sign Up</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mt-4">
            <label class="block text-white" for="username">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              required
              class="mt-1 block w-full p-2 border border-pink-dark rounded-md"
            />
          </div>
          <div class="mt-4">
            <label class="block text-white" for="name">Name</label>
            <input
              type="text"
              id="name"
              v-model="name"
              required
              class="mt-1 block w-full p-2 border border-pink-dark rounded-md"
            />
          </div>
          <div class="mt-4">
            <label class="block text-white" for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="mt-1 block w-full p-2 border border-pink-dark rounded-md"
            />
          </div>
          <div class="mt-4">
            <label class="block text-white" for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class="mt-1 block w-full p-2 border border-pink-dark rounded-md"
            />
          </div>
          <button
            type="submit"
            class="mt-6 w-full bg-pink-500 text-white p-2 rounded-md hover:bg-pink-light"
          >
            Sign Up
          </button>
        </form>
        <p class="mt-4 text-center">
          Already have an account? 
          <router-link to="/login" class="text-white font-semibold">Login</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import PocketBase from 'pocketbase';
  import { useRouter } from 'vue-router';
  const pb = new PocketBase('http://127.0.0.1:8090');
  const router = useRouter();
  
  const username = ref('');
  const name = ref('');
  const email = ref('');
  const password = ref('');
  
  async function handleSubmit() {
    // example create data
    console.log('Username:', username.value);
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    console.log('Name:', name.value);
    const record = {
        username: username.value,
        email: email.value,
        emailVisibility: true,
        password: password.value,
        passwordConfirm: password.value,
        name: name.value,
        };
    const create = await pb.collection('users').create(record);
    console.log('User Created:', create);
    router.push('/Login')
};
  
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>