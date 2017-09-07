import {Component, ElementRef, Input} from "@angular/core";
import {BlockableUI} from "../common/blockableui";

@Component({
    selector:'p-panel',
    styleUrls:['./panel.css'],
    template:`<div [ngClass]="'ui-panel ui-widget ui-widget-content ui-corner-all'" [style]="style" [class]="styleClass">
                  <div class="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all">
                    <span class="ui-panel-title" *ngIf="header">{{header}}</span>
                    <ng-content select="p-header"></ng-content>
                      <a *ngIf="toggleable" href="#" class="ui-panel-titlebar-icon ui-panel-titlebar-toggler 
                      ui-corner-all ui-state-default" (click)="toggle($event)">
                        <span [class]="collapsed?'fa fa-fw '+expandIcon:'fa fa-fw'+collapseIcon"></span>
                      </a>
                  </div>
                  <div>
                    <div></div>
                    <div></div>
                  </div>
              </div>
`
})
export class Panel implements BlockableUI{

  @Input() style:string;

  @Input() styleClass:string;

  @Input() header:string;

  @Input() expandIcon:string = "fa-plus";

  @Input() collapseIcon:string = "fa-minus";

  constructor(private el:ElementRef){

  }

  getBlockableElement():HTMLElement{
    return this.el.nativeElement.children[0];
  }
}
