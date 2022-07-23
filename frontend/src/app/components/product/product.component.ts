import { Component, Input, OnInit } from '@angular/core';
import { products } from '../../products';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  products = products;

  @Input() productName: string = "input not found";
  vieweProduct: string = "assets/img/peixes/tilapia.jpg";

  constructor() { }

  ngOnInit(): void {
    
  }

  changeViewes(): void{

    

  }

}
