import { Component } from "@angular/core";

@Component({
  templateUrl: "./welcome.component.html"
})
export class WelcomeComponent {
  pageTitle: string;
  
  constructor() {
    this.pageTitle = "Welcome";
  }
}
