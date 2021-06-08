import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/app/pages/claim/models/delivery';
import { DeliveryService } from '../../service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent  {

  constructor( private mdeliv : DeliveryService){
    this.deliv = [];
  }

  deliv  : Delivery[];
  
  title = 'Angular Google Maps Example';
   /*public delivery:Delivery[];
   constructor(){
    this.delivery=[];
   }*/
  lat = 37.19253098875548; 
  lng = 10.200277009508092;
  locationChosen = false;
public ngOnInit():void {

  this.getAllddiv();

}

getAllddiv (){
     
     this.mdeliv.getDelivery().subscribe(res=>{
           alert(res);

           this.deliv = res ;
     })

     
}


}
