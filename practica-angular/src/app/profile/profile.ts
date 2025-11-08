import { Component } from "@angular/core";
import { Account } from "../account/account";
import { Transactions } from "../transactions/transactions";
import { Loans } from "../loans/loans";

@Component({
  selector: "my-profile",
  imports: [Account, Transactions, Loans],
  templateUrl: "./profile.html",
  styleUrls: ["./profile.css"]
})

export class ProfileComponent {

  public name: string;
  public age: number;
  public location: string;
  public occupation: string;
  public phone: string;

  ngDoCheck() {
    console.log("ProfileComponent updated");
  }
  constructor() {
    this.name = "Martina Leon";
    this.age = 19;
    this.location = "South Park - Colorado";
    this.occupation = "Software Developer";
    this.phone = "(+593) 96-283-7277";

    console.log("Se cargo el ProfileComponent correctamente");
  }

  changeAge() {
    this.age = 20;
  }

  changeLocation() {
    this.location = "Springfield - The Simpsons";
  }
}
