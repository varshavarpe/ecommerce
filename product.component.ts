import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiServiceService } from 'src/app/services/api-service.service';
import { CookieServiceService } from 'src/app/services/cookie-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id:string | null = "";
  product:any;

  constructor(private api: ApiServiceService, private cookie: CookieServiceService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product = new FormGroup({
      id : new FormControl(this.id == "0" ? "": this.id),
      name: new FormControl("", Validators.compose([Validators.required])),
      description: new FormControl("", Validators.compose([Validators.required])),
      // sizes: new FormControl("", Validators.compose([Validators.required])),
      // colors: new FormControl("", Validators.compose([Validators.required])),
      mrp: new FormControl("", Validators.compose([Validators.required])),
      price: new FormControl("", Validators.compose([Validators.required])),
      instock: new FormControl("Yes", Validators.compose([Validators.required])),
      status: new FormControl("open"),
      sku: new FormControl(""),
      imagepath:new FormControl("")
    })
  }

  
  submit(product:any){
    let data = {data:product};
    // this.api.post("product/save", data).subscribe((result)=>{
    //   this.id = "";
    //   this.name = "";
    //  this.newlist();
    //  this.list();
    // })
  }

}