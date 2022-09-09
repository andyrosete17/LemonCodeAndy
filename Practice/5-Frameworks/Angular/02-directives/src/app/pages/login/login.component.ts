import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  template: `<button (click)="login()">Login</button>`,
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let params= this.route.snapshot.queryParams;
    const company = params['company']
  }

  login() {
    this.router.navigate(["/users"]);
  }
}
