import {Component, AfterViewInit, OnDestroy, AfterViewChecked, Input} from "@angular/core";
import {MenuIterm} from "../common/menuitem";
@Component({
  selector:'p-splitButton',
  template:`
    <div #container [ngClass]="{'ui-splitbutton ui-buttonset ui-widget':true,'ui-state-disabled':disabled}" [ngStyle]="style" [class] = "styleClass">
        <input #defaultBtn type="button" pButton [icon]="icon" [iconPos]="iconPos" [label]="label" 
        [cornerClassStyle] = "ui-corner-left" (click)="onDefaultButtonClick($event)"  [attr.tabindex]="tabindex"
        [disabled]="disabled"/><input type="button" pButton [icon]="fa-caret-down" 
        cornerStyleClass="ui-corner-right" (click)="onDropdownButtonClick($event)" [disabled]="disabled"/>
        <div [ngClass]="'ui-menu ui-menu-dynamic ui-widget ui-widget-content ui-helper-clearfix ui-shadow'" 
            [class]="menuStyleClass" [style]="menuStyle" [style.display]="menuVisible?'block':'none'">
            <ul class="ui-menu-list ui-helper-reset">
                <li class="ui-menuitem ui-widget ui-corner-all" role="menuitem"   *ngFor = "let item of model">
                  <a *ngIf="!item.routerLink" [href]="item.url||'#'" [attr.target]="item.target" 
                     [ngClass]="{'ui-state-disabled':item.disabled}" class="ui-menuitem-link ui-corner-all"
                     (click)="itemClick($event, item)">
                           <span [ngClass]="'ui-menuitem-icon fa fa-fw'" [class]="item.icon" *ngIf="item.icon"></span>
                            <span class="ui-menuitem-text">{{item.label}}</span>
                  </a>
                  <a *ngIf="item.routerLink" [routerLink] = "item.routerLink" [attr.target]="item.target" 
                     [ngClass]="{'ui-state-disabled':item.disabled}" class="ui-menuitem-link ui-corner-all"
                     (click)="itemClick($event, item)">
                           <span [ngClass]="'ui-menuitem-icon fa fa-fw'" [class]="item.icon" *ngIf="item.icon"></span>
                          <span class="ui-menuitem-text">{{item.label}}</span>
                  </a>
                </li>
            </ul>
        </div>
    </div>

`
})
export class SplitButton implements AfterViewInit,AfterViewChecked,OnDestroy{

  @Input() model:MenuIterm[];
  @Input() disabled:boolean;
  @Input() style:string;
  @Input() styleClass:string;
  @Input() menuStyle:string;
  @Input() menuVisible:boolean;
  @Input() menuStyleClass:string;
  @Input() icon:string;
  @Input() iconPos:string;
  @Input() label:string;
  @Input() tabindex:number;





  onDefaultButtonClick():void{

  }
  onDropdownButtonClick():void{

  }
  itemClick():void{

  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }


  ngAfterViewChecked(): void {
  }
}
