<template>
  <div class="layout">
    <Loading></Loading>
    <main class="main">
      <Nuxt />
      <layoutsFooter></layoutsFooter>
    </main>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'

export default {
  components: {
    Loading
  }
}

</script>

<style>
  .layout {
    position:relative;
  }
</style>
