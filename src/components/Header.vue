<template>
<header class="header">
  
    <div id="left">
         <i  id="menutoggle" class="fas fa-bars menutoggle"></i>
         <Menu />
    </div>

    <div id="right">
        <ul>
            <li><a class="sidebartoggle" href="#"><i class="fas fa-stream"></i></a></li>
            <li><a href="#"><i class="fas fa-search"></i></a></li>
            <li class="hide-under-lg"><a href="#"><i class="far fa-comment-alt"></i></a></li>
            <li><a href="#"><i class="far fa-bell"></i></a></li>
        </ul>
        <span> <img v-bind:src="avatar" alt="">   <small>Jhon Snow</small> </span>
    </div>

</header>
</template>
<script>
import Menu from './Menu'
export default {
    name: 'Header',
    components:{Menu},
    data: function(){
        return{
            avatar: require('./../assets/img/avatar-m.png')
        }
    }
}
</script>