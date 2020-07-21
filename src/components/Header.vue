<template>
<header class="header">
  
    <div id="left">
         <i  id="menutoggle" class="fas fa-bars menutoggle"></i>
         <Menu />
    </div>

    <div id="right">
        <ul>
            <li><a class="sidebartoggle" href="#"><i class="fas fa-stream"></i></a></li>
            <!--<li><a href="#"><i class="fas fa-search"></i></a></li>
            <li class=""><a href="#"><i class="far fa-comment-alt"></i><span id="tag" class="tag-info">6</span></a>  </li> -->
            <li><a href="#"><i class="far fa-bell"></i> <span class="tag-info">90</span> </a></li>
        </ul>
        <span> <img v-bind:src="avatar" alt=""> <small><a href="#">Jhon Snow</a></small></span>
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