<template>
  <div id="app">
    <!-- main -->
    <div class="row"> 
        
        <Sidebar  class="col col-3 hide-under-lg" />
        
        <div class="col col-12 col-lg-9"> 
           <Header />
            <Home />
        </div>

    </div>
    <!-- ./main -->

    <!-- footer -->
    <Footer />
  </div>
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

