import {Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {DomHandler} from "../dom/domhandler";
import {BlockableUI} from "../common/BlockableUI";

@Component({
  selector: 'p-blockUI',
  template:`<div #mask class="ui-blockui ui-widget-overlay" [ngClass]="{'ui-blockui-document': !target}"
    [ngStyle]="{display: blocked?'block':'none'}">
    <ng-content></ng-content>
</div>

`,
  providers:[DomHandler]
})
export class BlockuiComponent implements AfterViewInit,OnInit {
  constructor(private el:ElementRef) { }
  // 传入的参数 target 如果有target 就不是fixed的遮照
  @Input() target:string;

  // 本组件模板变量
  @ViewChild('mask') mask:ElementRef;

 // 是否显示标志
  _blocked: boolean;

  //
  get blocked():boolean {
    return this._blocked;
  }

  @Input() set blocked(val:boolean) {
    this._blocked = val;
    this._blocked?this.block():this.unblock();
  }

  ngOnInit() {

  }
  ngAfterViewInit(){
    //实现了getBlockableElement TODO 在修改
    // if(this.target&&!this.target.getBlockableElement){
    //   throw 'Target of BlockUI must implement BlockableUI interface';
    // }

    console.log(this.el);
  }

  block():void{
    console.log(this.target);
      if(this.target){
        //TODO target 需要实现getBlockableElement方法 返回target的dom
        // this.target.getBlockableElement().appendChild(this.mask.nativeElement);
      }
  }

  unblock():void{
    this.el.nativeElement.appendChild(this.mask.nativeElement);
}

}
