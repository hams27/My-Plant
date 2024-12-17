import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrl: './machines.component.css'
})
export class MachinesComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart:{type:'spline' , width:500, height:500, borderRadius:50 },
    title:{text:'Mill اجمالى مدة التوقف لكل '},
    series:[
      {
         name: 'Mill A',
           data:[10,25,15,30],
           
      }as any,{
        name: 'Mill B',
        data:[5,20,10,40],
        color:'#33339c'
      },{
        name: 'Mill C',
        data:[8,18,12,25],
        color:'skyblue'
      },{
        name: 'Mill D',
        data:[15,10,20,5],
        color:'blue'

      }
    ]}
    chart2: Highcharts.Options ={
      title:{text:' carry out by نسبة مدة التوقف بسبب   '},
      chart:{type:'pie' , plotShadow:false , width:500, height:500, borderRadius:50},
      series:[
        {
          type:'pie',
          data:[
            {name:'Electrical = 30h' , y:12.3  , color:'blue'},
            {name:'Mechanical = 21h ' , y:8.6 , color:'#33339c' },
            {name:'Production = 18h ' , y:7.4 , color:'skyblue' },
            {name:'Planned = 55h' , y:22.5 , color:'Darkblue' },
            {name:'Other = 120h' , y:49.2 , color:'#32349c' },
            ]
        }

      ]
    }
    chart3: Highcharts.Options ={
chart:{type:'pie' , plotShadow:false , width:500, height:500 , borderRadius:50 },
credits:{enabled:false},
plotOptions:{
  pie:{
    innerSize:'99%',
    borderRadius:10,
    slicedOffset:10,
    dataLabels:{
      connectorWidth:0
    }

  }

},
title:{
  verticalAlign:'middle',
  floating:true ,
  text:'% Mill مدة التوقف لكل '
},
legend:{
  enabled:false,
},
series:[
  {
    type:'pie',
    data:[
      {name:'Mill 1 = 40h' , y:22.09  , color:'blue'},
      {name:'Mill 2 = 37h ' , y:20.44 , color:'#33339c' },
      {name:'Mill 3 = 35h ' , y:19.34 , color:'skyblue' },
      {name:'Mill 4 = 69h' , y:38.14 , color:'Darkblue' },
      ]
    
  }

]
    }
}
