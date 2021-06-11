import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DataService } from '../../core/services/data/data.service'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  rows:any
  columns:any
  employee!: any;
  ColumnMode = ColumnMode;

  // rows = [
  //   { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  //   { name: 'Dany', gender: 'Male', company: 'KFC' },
  //   { name: 'Molly', gender: 'Female', company: 'Burger King' },
  //   { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  //   { name: 'Dany', gender: 'Male', company: 'KFC' },
  //   { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  //   { name: 'Dany', gender: 'Male', company: 'KFC' },
  // ];
  // columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      // console.log(data)
      this.employee = data.map(item => {
        const object: any = item.payload.doc.data();
        object["id"] = item.payload.doc.id;
        return object;
      })
      console.log(this.employee);
     this.showData();
    });


  }

  showData(){
    this.rows = this.employee;
    // this.columns=[
    //   { name: 'Name', prop: 'first_name' },
    //   { name: 'Email', prop: 'email' },
    //   { name: 'Role', prop: 'id', },
    // ];
  }

}
