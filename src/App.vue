<template>
  <main class="app" id="app">
    <Sidebar/>
    <!-- main -->    
    <section class="col main"> 
        <Header />
        <Home />
    </section>
    <!-- ./main -->
    <!-- footer -->
    <Footer />
  </main>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Home,
    Footer
  }
}
</script>

