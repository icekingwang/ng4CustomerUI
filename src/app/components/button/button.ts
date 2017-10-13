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
  @Input() cornerClassStyle:string = "ui-corner-all";
  public _icon:string;
  public _label:string;
  public initialized:boolean;

  @Input() get icon(): string {
    return this._icon;
  }
  set icon(value: string) {
    this._icon = value;
    if(this.initialized){
      let iclass = this.iconPos==="left"?"ui-button-icon-left":"ui-button-icon-right";
      this.domhandler.findSingle(this.el.nativeElement,".fa").className = iclass + " ui-clickable fa fa-fw " + this.icon;
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
        if(this.icon){
          var iconElement = document.createElement("span");
          var iconPosClass = this.iconPos==="left"?"ui-button-icon-left":"ui-button-icon-right";
          iconElement.className = iconPosClass + " ui-clickable fa fa-fw " + this.icon;
          this.el.nativeElement.appendChild(iconElement);
        }
        var labelElement = document.createElement("span");
        labelElement.className = "ui-button-text ui-clickable";
        labelElement.appendChild(document.createTextNode(this.label||'ui-btn'));
        this.el.nativeElement.appendChild(labelElement);
        this.initialized = true;
  }

  ngOnDestroy(): void {
    while(this.el.nativeElement.hasChildNodes()){
      this.el.nativeElement.removeChild(this.el.nativeElement.lastChild)
    }
    this.initialized = false;
  }

  getStyleClasses():string {
    let styleClass="ui-button ui-widget ui-default-state " + this.cornerClassStyle;
    if(this.icon){
        if(this.label!=null&&this.label!=undefined){
           styleClass+=this.iconPos ==="left"?" ui-button-text-icon-left":" ui-button-text-icon-right";
        }else{
          styleClass+=" ui-button-icon-only";
        }
    }else{
      styleClass+=" ui-button-text-only";
    }
    return styleClass;
  }



}
