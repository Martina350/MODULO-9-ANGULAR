import { Component } from "@angular/core";

@Component({
  selector: "my-product",
  templateUrl: "./product.html",
  styleUrls: ["./product.css"]
})

export class ProductComponent {
  
  public name: string;
  public brand: string;
  public price: number;  
  public description: string;

  constructor() {
    this.name = "Laptop";
    this.brand = "TechBrand";
    this.price = 1200;
    this.description = "A high-performance laptop";

    console.log("ProductComponent initialized");
  }
  
}