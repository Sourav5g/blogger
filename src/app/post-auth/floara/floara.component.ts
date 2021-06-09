import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-floara',
  templateUrl: './floara.component.html',
  styleUrls: ['./floara.component.css']
})
export class FloaraComponent implements OnInit {
  public editorContent: string = ''
  constructor() { }

  ngOnInit(): void {
   
  }

  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
  }

  // public initialize(initControls: any) {
  //    console.log(initControls)
    
  //   initControls.getEditor('html.set', '');
   
  // }

}
