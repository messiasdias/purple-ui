<template>
<header>
  
    <div id="left">
         <i  id="menutoggle" class="fas fa-bars menutoggle"></i>
         <Menu />
    </div>

    <div id="right">
        <ul>
            <li><a href="#"><i class="fas fa-ellipsis-h"></i></a></li>
            <li><a href="#"><i class="fas fa-search"></i></a></li>
            <li class="hide-under-lg"><a href="#"><i class="far fa-comment-alt"></i></a></li>
            <li><a href="#"><i class="far fa-bell"></i></a></li>
        </ul>
        <span> <img src="https://preview.webpixels.io/purpose-application-ui-kit/assets/img/theme/light/team-4-800x800.jpg" alt="">   <small>Jhon Snow</small> </span>
    </div>

</header>
</template>
<script>
import Menu from './Menu'
export default {
    name: 'Header',
    components:{Menu}
}
</script>