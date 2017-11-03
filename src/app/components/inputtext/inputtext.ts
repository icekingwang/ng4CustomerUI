import {Directive, DoCheck, ElementRef, HostListener, HostBinding, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
@Directive({
  selector:"[pInputText]"
})
// host:{
//   // "class.ui-inputtext":"true",
//   "class.ui-widget":"true",
//     "class.ui-corner-all":"true",
//     "class.ui-state-default":"true",
//     "class.ui-state-filled":"filled"
// }
export class InputText implements DoCheck{

  filled:boolean;
//HostBinding 绑定属性 可以用host 最好用HostBinding
  @HostBinding("class.ui-inputtext") uip = "true";
  @HostBinding("class.ui-corner-all") uca = "true";
  @HostBinding("class.ui-state-default") usd = "true";
  @HostBinding("class.ui-widget") uw = "true";
  @HostBinding("class.ui-state-filled") usf = "filled";
  constructor(public el:ElementRef){}

  ngDoCheck(): void {
    this.updateFilledState();
  }

  updateFilledState(){
    this.filled = this.el.nativeElement.value&&this.el.nativeElement.value.length;
  }
//HostListener 绑定事件
  @HostListener("input",['$event'])
  onInput(e){
    this.updateFilledState();
  }

}

@NgModule({
  imports: [CommonModule],
  exports: [InputText],
  declarations: [InputText]
})
export class InputTextModule { }
