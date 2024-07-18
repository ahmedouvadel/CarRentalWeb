import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Route, Router } from "@angular/router";
import { AuthService } from "../Services/AuthSevice/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent implements OnInit {
  fromGroup!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fromGroup = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control(""),
    });
  }

  login() {
    let username = this.fromGroup.value.username;
    let password = this.fromGroup.value.password;
    this.authService.login(username, password).subscribe({
      next: (res) => {
        this.authService.loadProfile(res); //8ahrli nak lahi tem transmeti les donne cm sa beyn les service 
        this.router.navigateByUrl("admin/dashboard");
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
