import {Component, ElementRef, Input} from "@angular/core";
import {BlockableUI} from "../common/blockableui";
import {trigger,state,style,transition,animate} from '@angular/animations';

@Component({
    selector:'p-panel',
    template:`<div [ngClass]="'ui-panel ui-widget ui-widget-content ui-corner-all'" [style]="style" [class]="styleClass">
                  <div class="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all">
                    <span class="ui-panel-title" *ngIf="header">{{header}}</span>
                    <ng-content select="p-header"></ng-content>
                      <a *ngIf="toggleable" href="#" class="ui-panel-titlebar-icon ui-panel-titlebar-toggler 
                      ui-corner-all ui-state-default" (click)="toggle($event)">
                        <span [class]="collapsed?'fa fa-fw '+expandIcon:'fa fa-fw '+collapseIcon"></span>
                      </a>
                  </div>
                  <div class="ui-panel-content-wrapper" [@panelContent]="collapsed?'hidden':'visible'" 
                    (@panelContent.done)="onToggleDone($event)"
                    [ngClass]="{'ui-panel-content-wrapper-overflown':collapsed||animating}">
                    <div class="ui-panel-content ui-widget-content">
                        <ng-content></ng-content>
                    </div>
                    <div class="ui-panel-footer">
                        <ng-content select="p-footer"></ng-content>
                    </div>
                  </div>
              </div>
`,
  animations:[
    trigger('panelContent',[
      state('hidden',style({
          'height':0
      })),
      state('visible',style({
        height: '*'
      })),
      transition('hidden<=>visible',[
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ])
    ])
  ]
})
export class Panel implements BlockableUI{

  @Input() toggleable:boolean;

  @Input() style:string;

  @Input() styleClass:string;

  @Input() header:string;

  @Input() expandIcon:string = "fa-plus";

  @Input() collapseIcon:string = "fa-minus";

  @Input() collapsed:boolean = false;

  public animating:boolean;

  constructor(private el:ElementRef){

  }

  getBlockableElement():HTMLElement{
    return this.el.nativeElement.children[0];
  }

  onToggleDone(event:Event){
    this.animating = false;
    console.log("panel-onToggleDone");
  }

  toggle(event:Event){
    if(this.animating===true){
      return;
    }
    this.animating = true;
    this.collapsed = !this.collapsed;
    event.preventDefault();
  }
}
//TODO @Output() 输出属性还不理解
