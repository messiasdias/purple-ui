<template>
<footer>
    <div id="left">
        <p>&copy; 2020 <b>{{description}}</b> All right reserved.</p>
    </div>
    <div id="right">
        <ul>
            <li>
                <span @click="openModal(!modal)" ><img :src="languages.active.img" alt=""> <b>{{languages.active.name}}</b> </span>
                <template v-if="modal == true">
                    <ul  id="langDrowpcard" class="card modal" >
                        <li @click="setLanguage(lang)" v-for="(lang, i) in languages.list" :key="i" > <img :src="lang.img" /> <a>{{lang.name}}</a></li>
                    </ul> 
                </template>  

            </li>

            <li><a href="#/">Support</a></li>
            <li><a href="#/">Terms</a></li>
            <li><a href="#/">Privacy</a></li>
        </ul>
    </div>
</footer>
</template>
<script>
export default {
    name: 'Footer',
    props:{
        description: {
            type: String,
            default: 'PurpleUI'
        }
    },
    data: function () {
        return{
            modal: false,
            languages: {
            active: {},
            list: [
                {
                    name: 'English',
                    img: require('./../assets/img/us.svg'),
                    meta: 'en-US'
                },

                {
                    name: 'Spanish',
                    img: require('./../assets/img/es.svg'),
                     meta: 'es'
                },
                {
                    name: 'Romeno',
                    img: require('./../assets/img/ro.svg'),
                     meta: 'ro'
                },
                {
                    name: 'Greek',
                    img: require('./../assets/img/gr.svg'),
                     meta: 'el'
                },
                {
                    name: 'Brasil',
                    img: require('./../assets/img/br.svg'),
                     meta: 'pt-BR'
                },
                {
                    name: 'Portugal',
                    img: require('./../assets/img/pt.svg'),
                     meta: 'pt-PT'
                }
            ]
      }
        }
    },
    methods:{
        setLanguage(lang){
            this.languages.active = lang
            this.openModal(false)
            this.$emit('setLanguage',lang)
            localStorage.setItem('lang', JSON.stringify(lang))
        },
        openModal(open=false) {
           setTimeout(()=>{ this.modal = open }, 50)
        },
        isOpenModal() {
            return this.modal
        }
    },
    mounted(){
        if( localStorage.getItem('lang') !== undefined && localStorage.getItem('lang') !== null  ){
            this.setLanguage(JSON.parse(localStorage.getItem('lang')))
        }else{
           this.setLanguage(this.languages.list[4]) 
        }
    }
}
</script>