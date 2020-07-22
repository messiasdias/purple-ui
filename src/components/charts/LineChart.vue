<template>
    <div id="linechart"></div>
</template>
<script>
import ApexCharts from 'apexcharts'
export default {
    name:'LineChart',
    props: {
        data: {
            type: Array,
            default: [
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
            ]
        } ,
        labels:{
            type: Array,
            default: ['Jan', 'Mar', 'May', 'Jul', 'Dez']
        },
        colors:{
            type: Array,
            default: ['#6e00ff', '#510fa8','#4799eb','#F85D5D','#9e7700']
        },
        type:{
            type: String,
            default: 'line' // [line | area | bar]
        },
        inOneLine: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            chart:null,
            options: {
                el: '',
                chart: {
                    type: 'line',
                    stacked: true
                },
                fill: {
                    type:  'solid' 
                },
                stroke: {
                    curve: 'smooth',
                    width: 6
                },
                series: [],
                xaxis: {
                    categories: []
                }
            }
        }
    },
    mounted(){
        this.options.series = this.data
        this.options.xaxis.categories = this.labels
        this.options.colors = this.colors
        this.options.chart.type = this.type
        this.options.chart.stacked = this.inOneLine

        console.log(document.querySelector('#linechart'))

        this.chart = new ApexCharts(document.querySelector('#linechart'), this.options);
        this.chart.render();
    }
}
</script>
<style scoped="scss">
    #linechart {
        padding: 0 !important;
        margin: 0 !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>