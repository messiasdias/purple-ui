<template>
<aside class="sidebar">
  <div class="logo flex-row-center">
      <a href="/">
        <img v-bind:src="logo" /> 
        <h1>Purple UI</h1>
      </a>
      <i class="fas fa-stream sidebartoggle"></i>
  </div>

  <div class="profile">

      <img v-bind:src="avatar" />
      <h2 class="title">Jhon Snow</h2>
      <small class="subtitle">UI/UX Developer</small>
      <a class="btn-default"> <i class="fas fa-coins"></i> $2.30</a>

     <div class="icon-group">
            <a href="#"><i class="far fa-user"></i></a>
            <a href="#"><i class="far fa-comment-alt"></i> <span id="tag" class="tag-info">6</span> </a>
            <a href="#"><i class="fas fa-receipt"></i></a>
      </div> 

  </div>

  <div class="sidebar-menu">
      <ul>
            <li><a v-bind:class="{'active': $route.path === '/#/' }" href="/#/"> <i class="fa fa-home"> </i>  <b>Home</b> </a></li>
            <li><a v-bind:class="{'active': $route.path === '/#/projects' }" href="/#/projects"> <i class="fas fa-project-diagram"></i>  <b>Projects</b> </a></li>
            <li><a v-bind:class="{'active': $route.path === '/#/tasks' }" href="/#/tasks"> <i class="fas fa-tasks"></i>  <b>Tasks</b> </a></li>
            <li><a v-bind:class="{'active': $route.path === '/#/kanban' }" href="/#/kanban"> <i class="fas fa-columns"></i>  <b>Kanban</b> </a></li>
            <li><a v-bind:class="{'active': $route.path === '/#/users' }" href="/#/users"> <i class="fa fa-users-cog"> </i>  <b>Users</b> </a></li>
            <li><a v-bind:class="{'active': $route.path === '/#/profile' }" href="/#/profile"> <i class="fas fa-user-ninja"> </i>  <b>Profile</b> </a></li>
            <li><a v-bind:class="{'active': $route.path === '/#/invoices' }" href="/#/invoices"> <i class="fas fa-receipt"> </i>  <b>Invoices</b> </a></li>
            <li><a v-bind:class="{'active': $route.path === '/#/widgets' }" href="/#/widgets"> <i class="fa fa-cogs"> </i>  <b>Widgets</b> </a></li>
      </ul>

  </div>


   <div class="card">
        <h2>Hello, Friend!</h2>
        <p>Why not start using Purpose Application UI Kit and create something amazing today?</p>
        <a class="btn-default" href="#">Get Started</a>
    </div>


</aside>    
</template>
<script>

export default {
    name: "Sidebar",
    data: function () {
        return {
            logo: require('./../assets/img/logo.svg'),
            avatar: require('./../assets/img/avatar-m.png')
        }
    }
}
</script>