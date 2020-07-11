<template>
<ul id="menu" class="menu">

    <li class="hide-on-lg separator"><a href="#">Overview</a></li>
     
    <li><a href="/">Home</a></li>

    <li class="dropdown-menu">
                
        <a href="#">Application</a>
        <i class="fas fa-angle-down hide-under-lg"></i>
        <i class="fas fa-angle-right hide-on-lg"></i>

        <ul class="dropdown-submenu">
            <li>
                <a href="#">Project <i class="fas fa-angle-right"></i></a>     
                <ul class="dropdown-submenu">
                    <li><a href="#">Card Listing</a></li>
                    <li><a href="#">Table Listing</a></li>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Create new</a></li>
                </ul>
            </li>
       

            <li>
                <a href="#">Task <i class="fas fa-angle-right"></i></a>
                <ul class="dropdown-submenu">
                        <li><a href="#">Card Listing</a></li>
                        <li><a href="#">Table Listing</a></li>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Create new</a></li>
                </ul>
            
            </li>
            <li>
                <a href="#">User <i class="fas fa-angle-right"></i></a>
                <ul class="dropdown-submenu" >
                    <li><a href="#">Card Listing</a></li>
                    <li><a href="#">Table Listing</a></li>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Create new</a></li>
                </ul>
                
            </li>
            <li>
                <a href="#">Authentication <i class="fas fa-angle-right"></i></a>

                <ul class="dropdown-submenu">
                    <li><a href="#">Card Listing</a></li>
                    <li><a href="#">Table Listing</a></li>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Create new</a></li>
                </ul>
            </li>
            <li><a href="#">Accout <i class="fas fa-angle-right"></i></a></li>
            <li><a href="#">Shop <i class="fas fa-angle-right"></i></a></li>
            <li><a href="#">Utility <i class="fas fa-angle-right"></i></a></li>

            <li>
                <ul class="dropdown-submenu2">
                        <li><a href="#">Calendar </a></li>
                        <li><a href="#">Timeline </a></li>
                        <li><a href="#">Kanban board </a></li>
                        <li><a href="#">Google map</a></li>
                </ul>
            </li>
        </ul>
                
    </li>

    <li><a href="#">Widgets</a></li>

    <li  class="dropdown-menu separator" >
        <a href="#">Docs</a> 
        <i class="fas fa-angle-down hide-under-lg"></i>
        <i class="fas fa-angle-right hide-on-lg"></i>

        <ul class="dropdown-submenu">
            <li> 
                <div class="icon-group">
                    <span>
                        <a href="#">
                            <i class="fas fa-file-contract"></i>
                            <div>
                                <b>Documentation </b>
                                <small>Awesome section examples for any scenario.</small>                       
                            </div>
                        </a>
                    </span>


                    <span>
                        <a href="#">
                            <i class="fas fa-mobile-alt"></i>
                            <div>
                                <b>Components </b>
                                <small>Awesome section examples for any scenario.</small>                 
                            </div>
                        </a>
                    </span>
           
                </div>
            </li>
            
            <li>
                <ul class="dropdown-submenu2">
                    <li><a href="#">Installation</a></li>
                    <li><a href="#">File structure</a></li>
                    <li><a href="#">Build tools</a></li>
                    <li><a href="#">Customization</a></li>
                </ul>    
            </li>

        </ul>
    </li>

     <li class="hide-on-lg"> <a href="#">Docs</a></li>
     <li class="hide-on-lg"> <a href="#">Register</a></li>
     <li class="hide-on-lg"> <a href="#">Sign in</a></li>


</ul>
</template>
<script>
export default {
    name: "Menu"
}
</script>