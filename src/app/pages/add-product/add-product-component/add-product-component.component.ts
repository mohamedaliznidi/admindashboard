import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../../Product-categories/models/Category';
import { CategoryService } from '../../Product-categories/services';
import { Product } from '../models/product';



@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css']
})
export class AddProductComponentComponent implements OnInit {
  public product : Product = new Product();
  public categories : Category[];
  Natures: String[] = ["Alimentaire", "Electromenager", "cosmetique", "hygiene", 
    "nettoyage" , "divertissement" , "textil" ,"decoration" , "electronique" ,
    "cuisine" , "autre"
 ];

 Matieres: String[] = [
  "carton","papier","vegetal","bioplastique","tissu","papier_plastifie",
  "bois","verre","plastique",
  "metal","aluminium","Polystyrene","plastique_type_bouteille","autre"
];

 selectedValue : string;
 selectedid :number;
 matiere:string;

  ngOnInit(): void {
    this.getcategories();
  

   
  }



  constructor(private http :HttpClient,private categoryservice : CategoryService) {
    this.categories=[];
  
   }

  public getcategories(): void {
    this.categoryservice.loadCategoryTableData().subscribe(
  
        (response: Category[])=> {
           this.categories=response;
          
        },
        (error: HttpErrorResponse)=> {
          alert(error.message);
        }
      );
    }

    onSubmit(data,selectedid){
      console.log(selectedid);
      console.log(this.product);
    
      const addendpoint ='http://localhost:8080/product/addproduct/'+selectedid;
      return this.http.post(addendpoint,data)
      
 
    }


    

    /* changeStatus()
    {
      var inputValue = (<HTMLInputElement>document.getElementById("nature")).value;
      var status = document.getElementById("nature");
      if (inputValue == "Alimentaire")
    
      {
    
     document.getElementById("ok").style.visibility="visible"
      }
      else 
      {
        document.getElementById("ok").style.visibility="hidden"
      }
    }*/
    
  }


