import { Component} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // charts
  Highcharts: typeof Highcharts = Highcharts;
  // day
  chartOptions: Highcharts.Options = {
    chart:{type:'spline' , width:400, height:250, borderRadius:50 },
    title:{text:'Total Stopping Time Per Mills Dialy'},
    credits:{enabled:false},
    xAxis:{
      categories:['Mill A','Mill B','Mill C','Mill D']
      },
    series:[
      {
         name: 'Total Mills',
           data:[10,25,15,30],
           color:'#33339c'
      }as any
    ]}
  // month
    chart2 : Highcharts.Options = {
      title:{text:' Downtime rate Carry out by in month'},
      chart:{type:'column' , plotShadow:false , width:300, height:350, borderRadius:30},
      credits:{enabled:false},
      xAxis:{
        categories:['Electrical','Mechanical','Production','Planned','Other']
        },
       
      series:[
        {
          type:'column',
          name:'Down chart',
          data : [
            {name:'Electrical 30h' , y:12.3 , color:'#DCF2F1'},
            {name:'Mechanical 21h' , y:8.6 , color:'#7FC7D9'},
            {name:'Production 18h' , y:7.4 , color:'#365486'},
            {name:'Planned 55h' , y:22.5 , color:'#0F1035'},
            {name:'Other 120h' , y:49.2 , color:'#0F1050'},
          ]
        }

      ]
    }

    chart3 : Highcharts.Options ={
      chart:{type:'area' , width:450, height:350, borderRadius:50 },
      title:{text:'Downtime rate Stop Category in month'},
      credits:{enabled:false},
      // xAxis:{
      //   categories:['Electrical','Mechanical','Production','Planned','Other']
      //   },
      series:[
        {
           name: 'Electrical',
             data:[0,10,5,25,15,30,20,45],
             color:'#0f1035'
            }as any,
            {
              name: 'Mechanical',
              data:[0,40,25,45,30,12,27,42],
              color:'darkblue'
       }
      ]
    }

    chart4 : Highcharts.Options = {
      title:{text:'Downtime rate Mills in month'},
      chart:{type:'column' , plotShadow:false , width:300, height:350, borderRadius:30,},
      credits:{enabled:false},
      xAxis:{
        categories:['Electrical','Mechanical','Production','Planned','Other']
        },
       
      series:[
        {
          type:'column',
          name:'carried',
          data : [
            {name:'Electrical 30h' , y:12.3 , color:'#DCF2F1'},
            {name:'Mechanical 21h' , y:8.6 , color:'#7FC7D9'},
            {name:'Production 18h' , y:7.4 , color:'#365486'},
            {name:'Planned 55h' , y:22.5 , color:'#0F1035'},
            {name:'Other 120h' , y:49.2 , color:'#0F1050'},
          ]
        },
        {
          type:'column',
          name:'mills',
          data : [
            {name:'Mill A 30h' , y:2.3 , color:'#DCF2F1'},
            {name:'Mill B 21h' , y:0.6 , color:'#7FC7D9'},
            {name:'Mill C 18h' , y:7 , color:'#365486'},
            {name:'Mill D 55h' , y:2.5 , color:'#0F1035'},
            {name:'Mill E 120h' , y:4.2 , color:'#0F1050'},
          ]
        }

      ]
    }

// year
    chart5 : Highcharts.Options = {
      title:{text:' Downtime rate Carry out by in year'},
      chart:{type:'column' , plotShadow:false , width:300, height:350, borderRadius:30},
      credits:{enabled:false},
      xAxis:{
        categories:['Electrical','Mechanical','Production','Planned','Other']
        },
       
      series:[
        {
          type:'column',
          name:'Down chart',
          data : [
            {name:'Electrical 30h' , y:12.3 , color:'#DCF2F1'},
            {name:'Mechanical 21h' , y:8.6 , color:'#7FC7D9'},
            {name:'Production 18h' , y:7.4 , color:'#365486'},
            {name:'Planned 55h' , y:22.5 , color:'#0F1035'},
            {name:'Other 120h' , y:49.2 , color:'#0F1050'},
          ]
        },  {
          type:'column',
          name:'Down chart',
          data : [
            {name:'Electrical 30h' , y:1.3 , color:'#DCF2F1'},
            {name:'Mechanical 21h' , y:8 , color:'#7FC7D9'},
            {name:'Production 18h' , y:7 , color:'#365486'},
            {name:'Planned 55h' , y:2.5 , color:'#0F1035'},
            {name:'Other 120h' , y:4.2 , color:'#0F1050'},
          ]
        },  {
          type:'column',
          name:'Down chart',
          data : [
            {name:'Electrical 30h' , y:2.3 , color:'#DCF2F1'},
            {name:'Mechanical 21h' , y:6 , color:'#7FC7D9'},
            {name:'Production 18h' , y:4 , color:'#365486'},
            {name:'Planned 55h' , y:22 , color:'#0F1035'},
            {name:'Other 120h' , y:49.2 , color:'#0F1050'},
          ]
        }

      ]
    }

    chart6 : Highcharts.Options ={
      chart:{type:'line' , width:450, height:350, borderRadius:50 },
      title:{text:'Downtime rate Stop Category in year'},
      credits:{enabled:false},
      xAxis:{
        categories:['Electrical','Mechanical','Production','Planned','Other']
        },
      series:[
        {
           name: 'Total Mills',
             data:[13.3 ,9.3 ,24.3 ,53.1],
             color:'#33339c'
        }as any
      ]
    }

    chart7 : Highcharts.Options = {
      title:{text:'Downtime rate Mills in year'},
      chart:{type:'column' , plotShadow:false , width:300, height:350, borderRadius:30,},
      credits:{enabled:false},
      xAxis:{
        categories:['Electrical','Mechanical','Production','Planned','Other']
        },
       
      series:[
        {
          type:'column',
          name:'at year',
          data : [
            {name:'Electrical 30h' , y:12.3 , color:'#DCF2F1'},
            {name:'Mechanical 21h' , y:8.6 , color:'#7FC7D9'},
            {name:'Production 18h' , y:7.4 , color:'#365486'},
            {name:'Planned 55h' , y:22.5 , color:'#0F1035'},
            {name:'Other 120h' , y:49.2 , color:'#0F1050'},
          ]
        },
        // {
        //   type:'column',
        //   name:'at month',
        //   data : [
        //     {name:'Electrical 30h' , y:2.3 , color:'#DCF2F1'},
        //     {name:'Mechanical 21h' , y:0.6 , color:'#7FC7D9'},
        //     {name:'Production 18h' , y:7 , color:'#365486'},
        //     {name:'Planned 55h' , y:2.5 , color:'#0F1035'},
        //     {name:'Other 120h' , y:4.2 , color:'#0F1050'},
        //   ]
        // }

      ]
    }
  
}
