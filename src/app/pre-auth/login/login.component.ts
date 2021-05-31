import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data/data.service'
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData!: FormGroup;
  submitted!: boolean;
  public loginDetails: any;
  errorCode!: string;
  //  data = {
  //   id: 5,
  //   first_name: "sourav",
  //   last_name: "Smith",
  //   email: "ann@codingthesmartway.com"
  // };
  constructor(
    public dataService: DataService,
    private fb: FormBuilder,
    private router:Router,
    private auth:AuthService
      ) { }

  ngOnInit(): void {
    //   this.dataService._userLogin(JSON.stringify(this.data)).subscribe(
    //     (res: any) => {
    //       console.log(res);
    // });

    this.dataService._getData().subscribe(data => {

      this.loginDetails = data;
      // console.log(this.loginDetails);
    });

    this.formLoginData();
  }

  formLoginData() {
    this.loginData = this.fb.group({
      first_name: ['Steve',Validators.required],
      password: ['Palmer',Validators.required]
    });
    // console.log(this.loginData.value.first_name)
  }

  get f() { return this.loginData.controls; }

  userLogin() {
    this.loginDetails.forEach( (value: any) => {
      // console.log(value.first_name);
      if (value.first_name == this.loginData.value.first_name && value.password == this.loginData.value.password){
        console.log(value.first_name);
        localStorage.setItem('num', JSON.stringify(value.first_name));
        this.router.navigate(['/dashboard']);
      }
      else{
        console.log("username password not matched")
      }
     }
    //  , (err: any) => {
    //   console.log(err);
    //   this.errorCode = 'Authentication failed, please check your username or password and try again.';
    //   this.submitted = false;
    //   setTimeout(() => {
        
    //   }, 3000);
    // }
    );
     
  }

  userRegister(){
    this.router.navigate(['/register']);
  }

  loginWithGoogle(){
this.auth.loginWithGoogle();
  }

}
