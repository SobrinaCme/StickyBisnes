<template>
    <div class="flex h-screen bg-pink-light">
      <aside class="w-64 bg-pink-dark shadow-md">
        <div class="p-4">
          <h1 class="text-xl font-bold">Sticker Dashboard</h1>
        </div>
        <nav class="mt-4">
          <ul>
            <li class="p-2 hover:bg-gray-200">
              <router-link to="/">Dashboard</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200">
              <router-link to="/stickers">Stickers</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200">
              <router-link to="/orders">Orders</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200">
              <button @click="logout" class="w-full text-left">Logout</button>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="flex-1 p-6">
        <h2 class="text-2xl font-semibold">Welcome to Your Dashboard</h2>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded shadow">
            <h3 class="font-bold">Total Stickers</h3>
            <p class="text-2xl">150</p>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <h3 class="font-bold">Total Orders</h3>
            <p class="text-2xl">75</p>
          </div>
          <div class="bg-white p-4 rounded shadow">
            <h3 class="font-bold">Pending Orders</h3>
            <p class="text-2xl">5</p>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import PocketBase from 'pocketbase';
  
  const router = useRouter();
  
  async function logout() {
    // await pb.authStore.clear();// Clear authentication store
    router.push('/login');
  }
  
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>