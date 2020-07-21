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
    <Footer @setLanguage="setLanguage($event)" :description="description" />
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
      default: '                 '
    }
  },
  components: {
    Header,
    Sidebar,
    Footer
  },
  data(){
    return {
      language: null,
      meta_info : {
        title: this.$route.name,
        titleTemplate:  '%s | '+this.description,
        htmlAttrs: {
          lang:  'pt-BR' ,
          amp: true
        },
        meta: [
          { charset: 'utf-8' },
          {
            'name': 'viewport',
            'content': 'width=device-width,initial-scale=1'
          },
        ]
      },
    
    }
  }, 
  methods:{
    setLanguage(lang){
      this.language = lang
      this.meta_info.htmlAttrs.lang = lang.meta
      this.$emit('setLanguage',lang)
    }
  },
  metaInfo() { 
    return this.meta_info
  },
  watch: {
    $route (to, from) {
      this.meta_info.title = this.$route.name
    }
  },
  mounted(){
    setTimeout(()=> {
      if(  document.getElementsByClassName('preloader').length >= 1 ){
       document.getElementsByClassName('preloader')[0].style.display = 'none' 
      }
    }, 1000)
  } 
  
}
</script>

