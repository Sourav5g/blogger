import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../core/services/data/data.service'
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loginDetails!: Object;
  updateData!: FormGroup;
  updateWithId :any

  employee!: any;
  // object: any;
  //  data = {
  //   id: "RKrWdMKJsF6g7k1foS7O",
  //   first_name: "sourav",
  //   password: "chowdhury",
  //   email: "ann@codingthesmartway.com"
  // };
  constructor(
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService

  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.dataService.getData().subscribe(data => {
     // console.log(data)
      this.employee = data.map(item => {
        const object: any = item.payload.doc.data();
        object["id"] = item.payload.doc.id;
        return object;

      })
      this.spinner.hide();

      //console.log(this.employee);
    });
    //this.formUpdate();
    this.updateData = this.fb.group({
      first_name: [''],
      password: [''],
      email: ['']
    });

  }

  // spinnerloader(){
  //   // console.log("2222")
  //   this.spinner.show();

  //   setTimeout(() => {
  //     /** spinner ends after 5 seconds */
  //     this.spinner.hide();
  //   }, 5000);
  // }
  

  userLogout() {
    localStorage.removeItem('num');
    localStorage.removeItem('googleToken');
    this.router.navigate(['']);
  }

  // formUpdate(){
  //   this.updateData = this.fb.group({
  //     first_name: ['',Validators.required],
  //     password: ['',Validators.required],
  //     email: ['',Validators.required]
  //   });
    
  // }

  deleteUser(id: any) {
    //console.log(id)
    this.dataService.deleteData(id);
  }

 //get f() { return this.updateData.controls; }


  updateUser(emp: any){
    //console.log(emp.first_name)
      this.updateWithId = emp.id;
     console.log(emp.id)
    this.updateData.patchValue({
      id:emp.id,
      first_name: emp.first_name,
      password: emp.password,
      email:emp.email,
    })
    console.log(this.updateWithId)
     
    
     //this.dataService.updateData( this.data);
  }
  update(){
    this.updateData.value["id"] = this.updateWithId;
    //console.log( this.updateData.value);
    this.dataService.updateData(this.updateData.value)
    this.updateData.reset();
  }
}
