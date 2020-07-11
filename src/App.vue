<template>
  <div id="app">
      <Header />
      <Sidebar />
      <Home />
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

