import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../../core/services/data/data.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData!: FormGroup;
  
  constructor(
    public dataService: DataService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formRegisterData();
  }
  //  data = {
  //   password: "sourav",
  //   first_name: "sourav",
  //   email: "sourav@codingthesmartway.com"
  // };
  formRegisterData(){
    this.registerData = this.fb.group({
      first_name: ['',Validators.required],
      password: ['',Validators.required],
      email: ['',Validators.required]
    });
    
  }

  get f() { return this.registerData.controls; }

  submit(){
    //console.log(this.registerData.value)
    this.dataService.addData(this.registerData.value)
    this.registerData.reset();
    //console.log(this.registerData.value)
  }
}
