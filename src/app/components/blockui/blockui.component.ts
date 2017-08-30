import {Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-blockui',
  template:`<div #mask class="ui-blockui ui-blockui-document" [ngClass]="{'ui-blockui-document': !target}"
    [ngStyle]="{display: blocked?'block':'none'}">
    <ng-content></ng-content>
</div>

`,
  styleUrls: ['./blockui.component.css']
})
export class BlockuiComponent implements AfterViewInit,OnInit {
  constructor(private el:ElementRef) { }
  @Input() target:string;

  @ViewChild('mask') mask:ElementRef;

  _blocked: boolean;

  get blocked():boolean {
    return this._blocked;
  }

  @Input() set blocked(val:boolean) {
    this._blocked = val;
    this._blocked?console.log():console.log();
  }

  ngOnInit() {

  }
  ngAfterViewInit(){
    console.log(this.el);
  }

}
