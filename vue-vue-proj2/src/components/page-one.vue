<template>
  <div class="center-container">
    <div class="content-box">
      <router-link :to="{ name: RouteNames.PageTwo }">
        <button>Go to TO DO Page</button>
      </router-link>

      <h1 class="text-2xl font-bold mb-2">Kurt Christian A. Vincoy</h1>
      <p class="text-gray-600">05/06/2025</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouteNames } from '../route-names/route-name.ts'
</script>
