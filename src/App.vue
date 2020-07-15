<template>
  <main class="app" id="app">
    <Sidebar/>
    <!-- main -->    
    <section class="col main"> 
        <Header />
        <router-view />
    </section>
    <!-- ./main -->
    <!-- footer -->
    <Footer />
  </main>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>

