<template>
     <div>
        <VueApexCharts type="area" height="350" :options="chartOptions" :series="series"></VueApexCharts>
     </div>
</template>
<script>
import ApexCharts from 'apexcharts'
import VueApexCharts from 'vue-apexcharts'

export default {
    name: 'Chart',
    components: {
        VueApexCharts,
    },
    data: function() {
        return {
          series: [
            {
              name: 'South',
              data: new Date('11 Feb 2017 GMT').getTime()
            },
            {
              name: 'North',
              data: new Date('11 Feb 2017 GMT').getTime()
            },
            {
              name: 'Central',
              data: new Date('11 Feb 2017 GMT').getTime()
            }
          ],
          chartOptions: {
            chart: {
              type: 'area',
              height: 350,
              stacked: true,
              events: {
                selection: function (chart, e) {
                  console.log(new Date(e.xaxis.min))
                }
              },
            },
            colors: ['#008FFB', '#00E396', '#CED4DC'],
            dataLabels: {
              enabled: true
            },
            stroke: {
              curve: 'smooth'
            },
            fill: {
              type: 'gradient',
              gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
              }
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left'
            },
            xaxis: {
              type: 'datetime'
            },
          },
          
        }      
    },
    mounted(){
       
    }
}
</script>
<style scoped="scss" >
    #chart {
        svg {
            max-width: 100% !important;
            min-height: 100% !important;
            background: red !important;
        }
    }
</style>