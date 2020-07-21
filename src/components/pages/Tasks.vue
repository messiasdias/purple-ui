<template>
<section class="section" >
    <div class="row top">

        <div class="left">

            <h1>Tasks</h1>

            <div class=""> 
                <strong>25</strong>
                <small>New tasks</small>
                <small class="hide-under-md" ><a href="#">Kanban Board</a></small>
            </div>
        </div>

        <div class="right">

            <div class="nav">
                <a href="#">
                    <i class="fas fa-file-export"></i>
                    <small>Export</small>
                </a>

                <a href="#">
                    <i class="fas fa-cog"></i>
                    <small>Settings</small>
                </a>
            </div>


            <a class="btn-circle" > <i class="fas fa-plus"></i> </a>    

        </div>

    </div>

    <div class="row">
        <div class="col-12">
            <div class="card tasks">
                <div class="card-header">
                    <strong>Tasks</strong>
                    <div class="actions">
                        <a href="#">
                            <li class="fas fa-search"></li>
                        </a>

                         <a href="#">
                            <li class="fas fa-filter"></li>
                        </a>

                         <a href="#">
                            <li class="fas fa-ellipsis-h"></li>
                        </a>
                    </div>
                </div>

                <div class="card-body">

                    <div class="container-fluid">
                        <h3 class="">Design</h3>
                        
                        <div class="card-inline-warning"> 
                            <span class="line"  style="width: 50%;"  ></span>
                        
                            <div class="left">
                                <a data-toggle="modal">Create the app's wireframe</a>

                                <div class="actions">
                                    <a href="#"> <i class="fas fa-comment-alt"></i> <span class="tag-info">6</span> </a>
                                </div>
                            </div>

                            <div class="right">
                                
                                <div class="actions">
                                    <a href="#"> <i class="fas fa-check-circle"></i> <span class="tag-info">50%</span> </a>
                                    <a href="#"> <i class="fas fa-file"></i> <span class="tag-info">3</span> </a>
                                    <span> <img v-bind:src="avatar_f" alt=""> <small><a href="#">+3</a></small></span>
                                </div>
    
                            </div>
                                
                        </div>


                        <div class="card-inline-error"> 
                            <span class="line"  style="width: 30%;"  ></span>
                        
                            <div class="left">
                                <a data-toggle="modal">Create Login and Register with Laravel</a>

                                <div class="actions">
                                    <a href="#"> <i class="fas fa-comment-alt"></i> <span class="tag-info">6</span> </a>
                                </div>
                            </div>

                            <div class="right">
                                
                                <div class="actions">
                                    <a href="#"> <i class="fas fa-check-circle"></i> <span class="tag-info">30%</span> </a>
                                    <a href="#"> <i class="fas fa-file"></i> <span class="tag-info">3</span> </a>
                                    <span> <img v-bind:src="avatar_m" alt=""> <small><a href="#">+3</a></small></span>
                                </div>
    
                            </div>
                                
                        </div>


                        <div class="card-inline-success"> 
                            <span class="line"  style="width: 90%;"  ></span>
                        
                            <div class="left">
                                <a data-toggle="modal">Finish the logo design</a>

                                <div class="actions">
                                    <a href="#"> <i class="fas fa-comment-alt"></i> <span class="tag-info">6</span> </a>
                                </div>
                            </div>

                            <div class="right">
                                
                                <div class="actions">
                                    <a href="#"> <i class="fas fa-check-circle"></i> <span class="tag-info">90%</span> </a>
                                    <a href="#"> <i class="fas fa-file"></i> <span class="tag-info">3</span> </a>
                                    <span> <img v-bind:src="avatar_m3" alt=""> <small><a href="#">+3</a></small></span>
                                </div>
    
                            </div>
                                
                        </div>
                    </div>


                     <div class="container-fluid">
                        <h3 class="">Market</h3>
                        
                        <div class="card-inline-info"> 
                            <span class="line"  style="width: 70%;"  ></span>
                        
                            <div class="left">
                                <a data-toggle="modal">Setup the marketplace strategy</a>

                                <div class="actions">
                                    <a href="#"> <i class="fas fa-comment-alt"></i> <span class="tag-info">6</span> </a>
                                </div>
                            </div>

                            <div class="right">
                                
                                <div class="actions">
                                    <a href="#"> <i class="fas fa-check-circle"></i> <span class="tag-info">3</span> </a>
                                    <a href="#"> <i class="fas fa-file"></i> <span class="tag-info">3</span> </a>
                                     <span> <img v-bind:src="avatar_f" alt=""> <small><a href="#">+3</a></small></span>
                                </div>
    
                            </div>
                                
                        </div>


                        <div class="card-inline-error"> 
                            <span class="line"  style="width: 10%;"  ></span>
                        
                            <div class="left">
                                <a data-toggle="modal">Create the Facebook campaign setup </a>

                                <div class="actions">
                                    <a href="#"> <i class="fas fa-comment-alt"></i> <span class="tag-info">6</span> </a>
                                </div>
                            </div>

                            <div class="right">
                                
                                <div class="actions">
                                    <a href="#"> <i class="fas fa-check-circle"></i> <span class="tag-info">10%</span> </a>
                                    <a href="#"> <i class="fas fa-file"></i> <span class="tag-info">3</span> </a>
                                    <span> <img v-bind:src="avatar_f2" alt=""> <small><a href="#">+3</a></small></span>
                                </div>
    
                            </div>
                                
                        </div>


                        <div class="card-inline-info"> 
                            <span class="line"  style="width: 70%;"  ></span>
                        
                            <div class="left">
                                <a data-toggle="modal">Compose newsletter for the big launch</a>

                                <div class="actions">
                                    <a href="#"> <i class="fas fa-comment-alt"></i> <span class="tag-info">6</span> </a>
                                </div>
                            </div>

                            <div class="right">
                                
                                <div class="actions">
                                    <a href="#"> <i class="fas fa-check-circle"></i> <span class="tag-info">70%</span> </a>
                                    <a href="#"> <i class="fas fa-file"></i> <span class="tag-info">3</span> </a>
                                     <span> <img v-bind:src="avatar_m" alt=""> <small><a href="#">+3</a></small></span>
                                </div>
    
                            </div>
                                
                        </div>
                    </div> 


                     <div class="container-fluid">
                        <h3 class="">Branding</h3>
                        
                        <div class="card-inline-success"> 
                            <span class="line"  style="width: 70%;"  ></span>
                        
                            <div class="left">
                                <a data-toggle="modal">Call with Dave</a>

                                <div class="actions">
                                    <a href="#"> <i class="fas fa-comment-alt"></i> <span class="tag-info">6</span> </a>
                                </div>
                            </div>

                            <div class="right">
                                
                                <div class="actions">
                                    <a href="#"> <i class="fas fa-check-circle"></i> <span class="tag-info">70%</span> </a>
                                    <a href="#"> <i class="fas fa-file"></i> <span class="tag-info">3</span> </a>
                                     <span> <img v-bind:src="avatar_m" alt=""> <small><a href="#">+3</a></small></span>
                                </div>
    
                            </div>
                                
                        </div>


                        <div class="card-inline-warning"> 
                            <span class="line"  style="width: 70%;"  ></span>
                        
                            <div class="left">
                                <a data-toggle="modal">Lunch meeting </a>

                                <div class="actions">
                                    <a href="#"> <i class="fas fa-comment-alt"></i> <span class="tag-info">6</span> </a>
                                </div>
                            </div>

                            <div class="right">
                                
                                <div class="actions">
                                    <a href="#"> <i class="fas fa-check-circle"></i> <span class="tag-info">70%</span> </a>
                                    <a href="#"> <i class="fas fa-file"></i> <span class="tag-info">3</span> </a>
                                    <span> <img v-bind:src="avatar_f" alt=""> <small><a href="#">+3</a></small></span>
                                </div>
    
                            </div>
                                
                        </div>


                        <div class="card-inline-info"> 
                            <span class="line"  style="width: 70%;"  ></span>
                        
                            <div class="left">
                                <a data-toggle="modal">Purple UI website redesign</a>

                                <div class="actions">
                                    <a href="#"> <i class="fas fa-comment-alt"></i> <span class="tag-info">6</span> </a>
                                </div>
                            </div>

                            <div class="right">
                                
                                <div class="actions">
                                    <a href="#"> <i class="fas fa-check-circle"></i> <span class="tag-info">70%</span> </a>
                                    <a href="#"> <i class="fas fa-file"></i> <span class="tag-info">3</span> </a>
                                     <span> <img v-bind:src="avatar_m" alt=""> <small><a href="#">+3</a></small></span>
                                </div>
    
                            </div>
                                
                        </div>

                    </div>     



                </div>

            </div>
        </div>    
    </div>
</section>
</template>
<script>
export default {
    name: 'Tasks',
    data(){
        return{
            avatar: require('./../../assets/img/avatar.png'),
            avatar_f:  require('./../../assets/img/avatar-f.png'),
            avatar_f2:  require('./../../assets/img/avatar-f2.png'),
            avatar_m:  require('./../../assets/img/avatar-m.png'),
            avatar_m2:  require('./../../assets/img/avatar-m2.jpg'),
            avatar_m3:  require('./../../assets/img/avatar-m3.png')
        }
    }
}
</script>