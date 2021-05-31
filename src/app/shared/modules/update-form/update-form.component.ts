import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../../../core/services/data/data.service'


@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  updateData!: FormGroup;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.updateData.patchValue({
    //   first_name: emp.first_name,
    //   password: emp.password,
    //   email:emp.email,
  }

  update(){

  }
}
