<template>
<section class="section">
    <div class="row">
                 <div class="col-lg-6">
                     <div class="card-body">
                         <h5 class="card-title">Pie Chart</h5>
                          <Doughnut></Doughnut>
                     </div>
                 </div>
                 <div class="col-lg-6">
                     <div class="card-body">
                         <h5 class="card-title">Line Chart</h5>
                          <Gauge></Gauge>
                     </div>
                 </div>
    </div>
</section>
<div>

</div>


</template>
<script>
import Doughnut from '@/components/Charts/ChartDoughnut.vue'
import Gauge from '@/components/Charts/ChartGauge.vue'

export default {
 name: 'AssetsReports',
 components:{
    Doughnut,
    Gauge
 }
}
</script>>