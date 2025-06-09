<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <h1 class="text-2xl">Your Name</h1>
    <p>{{ date }}</p>
    <button @click="goToApp" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go to app</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const date = new Date().toLocaleDateString()

function goToApp() {
  router.push('/todo')
}
</script>