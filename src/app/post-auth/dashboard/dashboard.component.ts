import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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
  addRowFromGroup!: FormGroup;
  updateData!: FormGroup;
  updateWithId: any
  employee!: any;
  index =0;

  constructor(
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder,
    private addRrowfb: FormBuilder,
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
    //Update form group
    this.updateData = this.fb.group({
      first_name: [''],
      password: [''],
      email: ['']
    });

    //addRow form group
    this.addRowFromGroup = this.addRrowfb.group({
      itemRows: this.addRrowfb.array([this.initItemRows()]),
    });

  }

  initItemRows() {
    return this.addRrowfb.group({
      first_name: [''],
      password: [''],
      email: ['']
    })
  }

  addNewRow() {
    const control = <FormArray>this.addRowFromGroup.get('itemRows');
    this.index=control.value.length
    control.push(this.initItemRows());
  }

  deleteRows(i: number) {
    if(this.index > 0){
      this.index = i-1
    }
    //this.index = i
    // console.log(i)
    const control = <FormArray>this.addRowFromGroup.get('itemRows');
    if (control.value.length > 1) {
      control.removeAt(i);
    } else {
      alert("one record is mandetary")
    }

  }

  getControls() {
    return (this.addRowFromGroup.get('itemRows') as FormArray).controls
  }

  //insert all data from multiple rows
  insertAllData() {
    console.log(this.index)
    for (let i = 0; i <= this.index; i++) {
      console.log (this.addRowFromGroup.value.itemRows[i]);
      this.dataService.addData(this.addRowFromGroup.value.itemRows[i])
    }
    this.addRowFromGroup.reset();
  }

  userLogout() {
    localStorage.removeItem('num');
    localStorage.removeItem('googleToken');
    this.router.navigate(['']);
  }

  deleteUser(id: any) {
    //console.log(id)
    this.dataService.deleteData(id);
  }

  //get f() { return this.updateData.controls; }


  updateUser(emp: any) {
    //console.log(emp.first_name)
    this.updateWithId = emp.id;
    //console.log(emp.id)
    this.updateData.patchValue({
      id: emp.id,
      first_name: emp.first_name,
      password: emp.password,
      email: emp.email,
    })
    //console.log(this.updateWithId)


    //this.dataService.updateData( this.data);
  }
  update() {
    this.updateData.value["id"] = this.updateWithId;
    //console.log( this.updateData.value);
    this.dataService.updateData(this.updateData.value)
    this.updateData.reset();
  }
}
