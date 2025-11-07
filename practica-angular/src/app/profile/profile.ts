import { Component } from "@angular/core";

@Component({
  selector: "my-profile",
  templateUrl: "./profile.html",
  styleUrls: ["./profile.css"]
})

export class ProfileComponent {
  
  public name: string;
  public age: number;
  public location: string;
  public occupation: string;
  public phone: string;

  
  constructor() {
    this.name = "Martina Leon";
    this.age = 19;
    this.location = "South Park - Colorado";
    this.occupation = "Software Developer";
    this.phone = "(+593) 96-283-7277";
    
    console.log("Se cargo el ProfileComponent correctamente");
  }
}
