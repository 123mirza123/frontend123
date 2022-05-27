<template>

    <div class="chartCard">
      <div class="chartBox">
        <canvas id="myChart"></canvas>
      </div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default{
name :'Gauge',
mounted(){
 // setup 
    const data = {
      labels: ['Mon', 'Tue', 'Wed'],
      datasets: [{
        label: 'Weekly Sales',
        data: [18, 12, 6],
        backgroundColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        needleValue:25,
        borderColor: 'white',
        borderWidth: 2,
        cutout: '95%',
        circumference: 180,
        rotation: 270,
        borderRadius: 5,
      }]
    };
    // gaugle
    const gaugeNeedle={
        id:'gaugeNeedle',
        afterDatasetDraw(chart,args,options){
            const{ ctx, config, data, chartArea: { top,bottom, left, right, width, height } } = chart;
         ctx.save();
    
     const needleValue=data.datasets[0].needleValue
     const dataTotal=data.datasets[0].data.reduce((a,b)=>a+b,0);
     const angle = Math.PI + (1/dataTotal * needleValue * Math.PI );
       
     const cx=width/2;
     const cy=chart._metasets[0].data[0].y;
        //needle
     ctx.translate(cx,cy);
     ctx.rotate(angle);
     ctx.beginPath();
     ctx.moveTo(0, -2);
     ctx.lineTo(height -135, 0);
     ctx.lineTo(0, 2);
     ctx.fillStyle='#444';
     ctx.fill();


        //needle dot
     ctx.translate(-cx, -cy);
     ctx.beginPath();
     ctx.arc(cx, cy, 5, 0, 10);
     ctx.fill();
     ctx.restore();
       
       }
    }

    // config 
    const config = {
     type: 'doughnut',
     data,
     options: {
     },
     plugins: [gaugeNeedle]
    };

    // render init block
     const myChart = new Chart(
     document.getElementById('myChart'),
     config
    );
}
}

   
</script>
    

<style>
      * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
      .chartMenu {
        width: 100vw;
        height: 40px;
        background: #1A1A1A;
        color: rgba(255, 26, 104, 1);
      }
      .chartMenu p {
        padding: 10px;
        font-size: 20px;
      }
      .chartCard {
        width: 50vw;
        height: calc(55vh - 42px);
        display: center;
        align-items: center;
        justify-content: center;
      }
      .chartBox {
        width: 400px;
        padding: 20px;
        border-radius: 20px;
        border: solid 3px rgb(249, 204, 219);
        background: white;
      }
    </style>