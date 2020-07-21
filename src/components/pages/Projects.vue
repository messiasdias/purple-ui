<template>
<section class="section">
    <div class="row top">

        <div class="left">

            <h1>Projects</h1>

            <div class=""> 
                <strong>9</strong>
                <small>Running projects</small>
                <small class="hide-under-md" ><a href="#">See table</a></small>
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
        
        <div v-for="(card, id) in cards" :key="id" class="col-12 col-md-4 col-lg-3">
            <div class="card projects" :id="'card'+id" >
                <div class="card-header" >
                    <strong>{{card.date}}</strong>
                    <div class="actions">
                        <a href="#">
                            <li class="fas fa-sync"></li>
                        </a>

                         <a href="#">
                            <li class="fas fa-ellipsis-h"></li>
                        </a>
                    </div>
                </div>

                <div class="card-body" >
                      <img class="avatar-lg" :src="card.img" />
                      <h4>{{card.text}}</h4>
                      <small>UI/UX Developer</small>
                      
                      <div class="actions">
                          <a v-if="i <= 2"  v-for="(cd, i) in cards" :key="i"  href="#"><img class="avatar-sm" :src="cd.img" alt="" /></a>
                      </div>
                      <span :class="'badge-'+card.status.class">{{card.status.text}}</span>
                </div> 


                <div class="card-footer" >
                    
                    <div class="actions">
                        <a href="#">
                            <i class="fas fa-plus"></i>
                        </a>

                         <a href="#">
                            <i class="fas fa-comment"></i>
                        </a>

                        <a class="tx-error" href="#">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </div>
                </div> 


            </div>
        </div>         
    </div>

      <a class="btn" href="#">Load more ...</a>
</section>   
</template>
<script>
export default {
    name: 'Projects',
    data: function (){
        return {
            cards:[
                {
                    date: '20 Apr',
                    text: 'Purpose Website UI',
                    img: require("./../../assets/img/avatar-f.png"),
                    status: {
                        text: 'Pending',
                        class: 'warning'
                    }
                },
                {
                    date: '1 May',
                    text: 'Purpose Website UI',
                    img: require("./../../assets/img/avatar-m.png"),
                    status: {
                        text: 'Completed',
                        class: 'success'
                    }
                },
                {
                    date: '11 Jun',
                    text: 'Purpose Website UI',
                    img: require("./../../assets/img/avatar-f2.png"),
                  status: {
                        text: 'Delayed',
                        class: 'error'
                    }
                },
                {
                    date: '20 Jul',
                    text: 'Purpose Website UI',
                    img: require("./../../assets/img/avatar-m2.jpg"),
                    status: {
                        text: 'Default',
                        class: 'default'
                    }
                },
                {
                    date: '10 Aug',
                    text: 'Purpose Website UI',
                    img: require("./../../assets/img/avatar-m3.png"),
                   status: {
                        text: 'Primary',
                        class: 'primary'
                    }
                },
                {
                    date: '7 Sep',
                    text: 'Purpose Website UI',
                    img: require("./../../assets/img/avatar.png"),
                   status: {
                        text: 'Secondary',
                        class: 'secondary'
                    }
                },
            ]
        }
    }
}
</script>