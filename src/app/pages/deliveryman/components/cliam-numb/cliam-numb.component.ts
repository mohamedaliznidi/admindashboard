import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-cliam-numb',
  templateUrl: './cliam-numb.component.html',
  styleUrls: ['./cliam-numb.component.css']
})

export class CliamNumbComponent implements OnInit {
  public stat:any;
  claims:number[]; 
  id:string[];

  barChartLabels: Label[];
  barChartLabels2: Label[];
  constructor( private https:HttpClient){
    /*this.username=[];
    this.barChartData=[
      { data: [], label: '' }
    ]
    this.workload=[];
 this.listDeliveryMan=[];*/
 this.barChartLabels=[];
 this.claims=[];
 this.id=[];
 this.barChartData2=[
  { data: [], label: '' }
]
this.barChartLabels2=[];
 

 
  
 

    
    }
     ngOnInit(): void {
       this.getstat();
       
       /*this.barChartLabels= this.username;
       // ["Pending", "InProgress", "OnHold", "Complete", "Cancelled"];
       this.barChartData=[
         { data: this.workload, label: 'workload' }
       ]*/
       this.barChartLabels2= this.id;
       // ["Pending", "InProgress", "OnHold", "Complete", "Cancelled"];
       this.barChartData2=[
         { data: this.claims, label: 'nbclaims' }
       ]
   
       //this.getlistofdeliveryman();
     }
   
     barChartType: ChartType = 'bar';
       barChartLegend = true;
       barChartPlugins:any = {'backgroundColor': [
         "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#E7E9ED",
      "#36A2EB"
      ]}
     barChartOptions: ChartOptions = {
       responsive: true,
     };
     /*listDeliveryMan: Deliveryman[];
     username: string[];
     workload: number[];
     title = 'bar-chart';*/
     
    public barChartColors: Color[] = [
     { backgroundColor: 'dark bleu' },
   ]
   
     barChartData: ChartDataSets[] ;
     /*[
       { data: [45, 37, 60, 70, 46], label: 'Task Status' }
     ];*/
   
   
     barChartData2: ChartDataSets[] ;
     /*public getlistofdeliveryman(){
       let resp= this._service.getDeliveryman() ;
       resp.subscribe((res)=>{this.listDeliveryMan=res
       this.listDeliveryMan.forEach(el=>{
   this.username.push(el.lastname)
   this.workload.push(el.rank)
   
   
   
       })
       
       
       
       
       });
      }*/
 
      getstat(){
 
      
       return this.https.get<any>("http://localhost:8092/list").subscribe(res=>{
         this.stat = res;
   
        
   console.log(this.stat);
 this.stat.forEach((element:any) => {
   this.claims.push(element.nbclaims)
   this.id.push(element.id_deli);
   
 });
 
 
 
 
 
 
 
 
 
 
 
   alert(res);
         
       })
   }
   }
 


