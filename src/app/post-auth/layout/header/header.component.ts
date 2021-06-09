import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router:Router,) { }

  ngOnInit(): void {
  }

  routeTo(routeName:any){
    //console.log(routeName)
    if(routeName != ''){
      //console.log(routeName)
      this.router.navigate(['dashboard/',routeName]);
    }
    else{
      //console.log(routeName)
      this.router.navigate(['']);
    }
  }

}
