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
        <div class="col-12 card tasks">
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
                    <h3 class="">Design</h3>
                    <div class="card2"> 
                        teste
                    </div>


                    <h3 class="">Design</h3>
                    <div class="card2"> 
                        teste
                    </div>

                </div>

            </div>

         </div>
</section>
</template>
<script>
export default {
    name: 'Tasks'
}
</script>