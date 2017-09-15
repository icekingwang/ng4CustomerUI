import {Directive, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {DomHandler} from "../dom/domhandler";
@Directive({
  selector:'[pButton]',
  providers:[DomHandler]
})

export class Button implements AfterViewInit,OnDestroy{

  constructor(public el:ElementRef,public domhandler:DomHandler){

  }


  ngAfterViewInit(): void {
    console.log(this.domhandler);
    console.log(this.el.nativeElement);
  }

  ngOnDestroy(): void {
  }



}
