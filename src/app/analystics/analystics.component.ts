import { Component , OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-analystics',
  templateUrl: './analystics.component.html',
  styleUrl: './analystics.component.css'
})
export class AnalysticsComponent implements OnInit{
  // charts
  Highcharts: typeof Highcharts = Highcharts;
  chart1 : Highcharts.Options ={
 chart:{type:'pie',plotShadow:false , width:350 ,borderRadius:50, height:300},
 credits:{enabled:false },
 plotOptions:{
   pie:{
     innerSize:'95%',
     
     slicedOffset:10,
     dataLabels:{
       connectorWidth:0
     }
   }
 },
   title:{
 floating:true,
 text:'test'    
   },
   legend:{
     enabled:false,
   },
   series:[
     {
       type:'pie',
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
 
   chart2 : Highcharts.Options ={
        chart:{type:'line' , width:450, height:300, borderRadius:50 },
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
//  add new data
   stoppageList:any[]=[];
   newData = {
     location:'',
     tn:'',
     stopCategory:'',
     stopTime:'',
     startTime:'',
     duration:'',
     carriedOutBy:'',
     comment:'',
   };
   locations=['Mill A','Mill B','Mill C','Mill D'];
   stopCategorys=['BreakDown','Maintenance','Plan','Other'];
   carriedOutBys=['BreakDown','Maintenance','Plan','Other'];
   constructor(private dashboard:DashboardService){}
   ngOnInit(): void {
     this.loadData();
   }
  //  dropdown and duration
   addData(): void{
     if(this.newData.location && this.newData.carriedOutBy && this.newData.stopCategory){
       this.stoppageList.push({...this.newData});
     }
     if(!this.newData.startTime || !this.newData.startTime){
       return ;
     }
     // حساب ال duration
     const startTime = this.parseTime(this.newData.startTime);
     const stopTime = this.parseTime(this.newData.stopTime);
 if(stopTime && startTime){
   const durationMinutes = (startTime.getTime() - stopTime.getTime()) / 60000;
   const hours = Math.floor(durationMinutes /60);
   const minutes = Math.abs(durationMinutes %60);
   this.newData.duration = `${hours} : ${minutes}`;
 }else{
   this.newData.duration = 'Invalid Time'
 }
     this.dashboard.addData(this.newData);
     this.newData={
       location:'',
       tn:'',
       stopCategory:'',
       stopTime:'',
       startTime:'',
       duration:'',
       carriedOutBy:'',
       comment:'',
     };
 this.loadData();
   }

   loadData(): void{
     this.stoppageList = this.dashboard.getData();
   }
   
   parseTime(time:string):Date | null{
 if(!time) return null;
 const [hours , minutes]= time.split(":").map(Number);
 const date= new Date();
 date.setHours(hours , minutes , 0 , 0);
 return date;
   }
}
