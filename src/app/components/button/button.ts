import {Directive, AfterViewInit, OnDestroy, ElementRef, Input} from "@angular/core";
import {DomHandler} from "../dom/domhandler";
@Directive({
  selector:'[pButton]',
  providers:[DomHandler]
})

export class Button implements AfterViewInit,OnDestroy{

  constructor(public el:ElementRef,public domhandler:DomHandler){

  }

  @Input() iconPos:string = "left";
  @Input() conerClassStyle:string = "ui-corner-all";
  public _icon:string;
  public _label:string;
  public initialized:boolean = true;

  @Input() get icon(): string {
    return this._icon;
  }
  set icon(value: string) {
    this._icon = value;
    if(this.initialized){
      let iclass = this.iconPos==="left"?"ui-button-icon-left":"ui-button-icon-right";
      this.domhandler.findSingle(this.el.nativeElement,".fa").className = iclass + "ui-clickable fa fa-fw " + this._icon;
    }
  }

  @Input() get label(): string {
    return this._label;
  }
  set label(value: string) {
    this._label = value;
    if(this.initialized){
      this.domhandler.findSingle(this.el.nativeElement,".ui-button-text").textContent = this._label;
    }

  }

  ngAfterViewInit(): void {
        this.domhandler.addMultipleClasses(this.el.nativeElement,this.getStyleClasses());
  }

  ngOnDestroy(): void {
    this.initialized = false;
  }

  getStyleClasses():string {
return ""
  }



}
