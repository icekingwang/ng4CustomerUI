import {Component, AfterViewInit, OnDestroy, AfterViewChecked} from "@angular/core";
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
                  
                </li>
            </ul>
        </div>
    </div>

`
})
export class SplitButton implements AfterViewInit,AfterViewChecked,OnDestroy{

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
  }


  ngAfterViewChecked(): void {
  }
}
