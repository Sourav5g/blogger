import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  OnInit
} from '@angular/core';
import { Sample1Component } from './sample1/sample1.component'
import { Sample2Component } from './sample2/sample2.component'


@Component({
  selector: 'app-dynamic-cmpt',
  templateUrl: './dynamic-cmpt.component.html',
  styleUrls: ['./dynamic-cmpt.component.css']
})
export class DynamicCmptComponent implements OnInit {

  @ViewChild('loadComponent', { read: ViewContainerRef }) entry!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  componentRef: any;

  createComponent(Id: number) {
    this.entry.clear();
    if (Id == 1) {
      const factory = this.resolver.resolveComponentFactory(Sample1Component);
      this.componentRef = this.entry.createComponent(factory);
    } else if (Id == 2) {
      const factory = this.resolver.resolveComponentFactory(Sample2Component);
      this.componentRef = this.entry.createComponent(factory);
    }
    this.componentRef.instance.message = "Called by dynamicComponent";
    this.componentRef.instance.data = this.data = [
      {
        "Id": 1,
        "Name": "Child1 Info"
      },
      {
        "Id": 2,
        "Name": "Child2 Info"
      }
    ];
  }
  destroyComponent() {
    this.componentRef.destroy();
  }

  data = [
    {
      "Id": 1,
      "Name": "Child1 Info"
    },
    {
      "Id": 2,
      "Name": "Child2 Info"
    }
  ]


}
