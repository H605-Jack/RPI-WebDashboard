<script setup>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="header">
    <Header />
  </div>
<div class="container-header">
  <div class="container">
    <div class="sidebar sidebar-style sidebar-color">
      <Sidebar />
    </div>
    <div class="content">
        <RouterView />
    </div>
  </div>
</div>

</template>