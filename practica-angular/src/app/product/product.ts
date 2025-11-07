import { Component } from "@angular/core";

@Component({
  selector: "my-product",
  templateUrl: "./product.html",
  styleUrls: ["./product.css"]
})

export class ProductComponent {
  constructor() {
    console.log("ProductComponent initialized");
    alert("Welcome to the Product Component!");
  }
  
}