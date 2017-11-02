import {
  Component, OnInit, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked,
} from "@angular/core";
@Component({
  selector:'p-dropdown',
  template:`<div [ngClass]="{'ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix':true}">
              <label [ngClass]="{'ui-dropdown-label ui-corner-all':true}"></label>
              <input/>
              <div></div>
              <div></div>
</div>`,
  animations:[]
})
export class DropDown implements OnInit,AfterContentInit,AfterViewInit,AfterViewChecked,OnDestroy{

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
  }

  ngOnDestroy(): void {
  }
}
