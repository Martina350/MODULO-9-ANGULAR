import { Component } from "@angular/core";
import { Movie } from "../movie/movie";


@Component({
  selector: "my-product",
  imports: [Movie],
  templateUrl: "./product.html",
  styleUrls: ["./product.css"]
})

export class ProductComponent {
  
  public name: string;
  public brand: string;
  public price: number;  
  public description: string;

  public showMovie: boolean = true;

  ngOnInit() {
    console.log("ProductComponent ngOnInit called");
  }

  ngDoCheck() {
    console.log("ProductComponent ngDoCheck called");
  }

  ngAfterViewInit() {
    console.log("ProductComponent ngAfterViewInit called");
  }

  constructor() {
    this.name = "Laptop";
    this.brand = "TechBrand";
    this.price = 1200;
    this.description = "A high-performance laptop";

    console.log("ProductComponent initialized");
  }

  changeName(){
    this.name = "Laptop Asus 177h";
  }

  hideMovie(value: boolean){
    this.showMovie = value;
  }
}