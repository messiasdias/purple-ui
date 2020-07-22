<template>
<section class="section" >
    <div class="top">
        <h1>Moning, Heather!</h1>
        <p>Have a nice day!</p>
    </div>


    <div class="row col-12">
        <div class="col-12 col-md-6 col-lg-8">
            <div class="card">
                <LineChart 
                    v-bind:data="chart1.data"
                    v-bind:type="chart1.type"
                    v-bind:labels="chart1.labels"
                 />
            </div>
        </div>

         <div class="col-12 col-md-6 col-lg-4">
             <div class="card">
                  <LineChar
                    v-bind:data="chart2.data"
                    v-bind:type="chart2.type"
                    v-bind:labels="chart2.labels"
                 />
             </div>  
        </div>
    </div>


    <div class="row col-12">
        <div class="col-12 col-md-6 col-lg-6">
            <div class="card">
                  
            </div>
        </div>

         <div class="col-12 col-md-6 col-lg-6">
             <div class="card">
                 
             </div>  
        </div>
    </div>



    <div class="row col-12">
        <div class="col-12 col-md-6 col-lg-7">
            <div class="card">
                  
            </div>
        </div>

         <div class="col-12 col-md-6 col-lg-5">
             <div class="card">
                 
             </div>  
        </div>
    </div>


    <div class="row col-12">
        <div class="col-12 col-md-6 col-lg-8">
            <div class="card">
                  
            </div>
        </div>

         <div class="col-12 col-md-6 col-lg-4">
             <div class="card">
                 
             </div>  
        </div>
    </div>

</section>   
</template>
<script>
import LineChart from './../charts/LineChart.vue'


export default {
    name: 'Home',
    components:{
        LineChart
    },
    data(){
     return{
        chart1: {
            data: [
                {
                    name: 'Users',
                    data: [6,50,56,30,25]
                },

                {
                    name: 'Posts',
                    data: [78,56,25,3,2]
                },

                {
                name: 'Likes',
                data: [55,25,16,7,20]
                }
            ],
            labels: ['Jan', 'Mar', 'May', 'Jul', 'Dez'],
            type: 'line',
        },


        chart2: {
            data: [  
            ],
            labels: [],
            type: 'line',
        },
        


     }
    },
    mounted(){

    }
}
</script>
