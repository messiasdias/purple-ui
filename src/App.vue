<template>
  <main class="app" id="app">
    <Sidebar :description="description" />
    <!-- main -->    
    <section class="col main"> 
        <Header />
        <router-view />
    </section>
    <!-- ./main -->
    <!-- footer -->
    <Footer :description="description" />
  </main>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  props:{
    description: {
          type: String,
          default: 'PurpleUI'
    }
  },
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>

