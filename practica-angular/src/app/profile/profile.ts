import { Component } from "@angular/core";

@Component({
  selector: "my-profile",
  templateUrl: "./profile.html",
  styleUrls: ["./profile.css"]
})

export class ProfileComponent {
  constructor() {
    console.log("Se cargo el ProfileComponent correctamente");
    alert("Bienvenido al perfil, estas dentro de la aplicacion!");
  }
}
