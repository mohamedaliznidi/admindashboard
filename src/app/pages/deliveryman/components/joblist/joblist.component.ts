import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delivery } from 'src/app/pages/claim/models/delivery';
import { DeliveryService } from '../../service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  public msg : string ;
  public deliverys:Delivery[];
  public  frais : any  ;
  public atoumobile:string;
  public show:boolean=false;
  constructor(private deliveryService:DeliveryService, private https : HttpClient,  private router : Router ) { 
    this.deliverys=[];
    this.frais;
    this.atoumobile="" ;
    
  }

  ngOnInit(): void {
    this.getDeliveryman();
    
  }
  public showmap(){
    this.show=true;
  }
  public getDeliveryman():void {
    this.deliveryService.getDelivery().subscribe(
      (response:Delivery[])=>{
        this.deliverys=response;
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
    );
    }
   
    getfrais(id_deliv : number){


      return this.https.get<number>("http://localhost:8092/frais/"+id_deliv).subscribe(res=>{
        this.frais = res;
  
       
  console.log(this.frais);
        
      })

}
getaoto(id_deliv : number){


  return this.https.get<string>("http://localhost:8092/delivery/"+id_deliv).subscribe(res1=>{
    this.atoumobile = res1;

   
console.log(this.atoumobile);
    
  })


}
todo(delivery:Delivery){
  console.log(delivery);
  this.deliveryService.iddo(delivery).subscribe((data)=>{this.msg=data});
  window.location.reload();
  
}
}

