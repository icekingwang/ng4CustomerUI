import {
  Component, OnInit, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, Input,
} from "@angular/core";
import {trigger, state, style, transition, animate} from "@angular/animations";
import {SelectIterm} from "../common/selectitem";
@Component({
  selector:'p-dropdown',
  template:`<div #container [ngClass]="{'ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix':true,
                 'ui-dropdown-disabled':disabled,'ui-dropdown-open':panelVisible,'ui-dropdown-focus':focus}"
                 (click)="onMouseClick($event)"
                [class]="styleClass" [ngStyle]="style"  >
              <label [ngClass]="{'ui-dropdown-label ui-inputtext ui-corner-all':true,
              'ui-dropdown-label-empty':!label}" *ngIf="!editable">{{label||'empty'}}</label>
              <!--<input #editableInput type="text" [attr.aria-label] = "'selectOption'?selectOption.label:''"-->
                <!--/>-->
              <div class="ui-dropdown-trigger ui-state-default ui-corner-right">
                  <span class="fa fa-fw fa-caret-down ui-clickable"></span>
              </div>
              <div #panel [ngClass]="'ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow'"
                    [@panelState] = "panelVisible?visible:hidden"
                    [ngStyle]="panelStyle" class="panelStyleClass" [style.display]="panelVisible?'block':none">
                 <div #itemswrapper class="ui-dropdown-items-swapper" [style.max-height]="scrollHeight||'auto'">
                    <ul class="ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all 
                    ui-helper-reset" *ngIf="lazy?panelVisible:true">
                        <li *ngFor="let option of optionsToDisplay;let i=index"
                         [ngClass]="{'ui-dropdown-item ui-corner-all':true,
                         'ui-state-highlight':(selectOption==option),
                         'ui-dropdown-item-empty':!option.label||option.label.length==0}"
                         (click)="onItemClick($event, option)">
                        <span >{{option.label||'empty'}}</span>
                        <!--<span *ngIf="!itemTemplate">{{option.label||'empty'}}</span>-->
                        <!--<ng-template *ngIf="itemTemplate" [pTemplateWapper] = "itemTemplate" [item]="option"></ng-template>-->
                        </li>
                    </ul>
                 
                </div>   
              </div>
</div>`,
  animations:[
    trigger('panelState',[
      state('hidden',style({
          opacity:0
      })),
      state('visible',style({
        opacity:1
      })),
      transition('visible=>hidden',animate('400ms ease-in')),
      transition('hidden=>cisible',animate('400ms easy-out'))
    ])
  ]
})
export class DropDown implements OnInit,AfterContentInit,AfterViewInit,AfterViewChecked,OnDestroy{

  @Input() scrollHeight = "200px";
  @Input() lazy:boolean = true;

  @Input() disabled:boolean;
  @Input() panelVisible:boolean;
  @Input() focus:boolean;
  @Input() editable:boolean;
  @Input() styleClass:any;
  @Input() style:any;
  @Input() label:string;
  @Input() panelStyle:any;
  @Input() panelStyleClass:any;

  @Input() optionsToDisplay:SelectIterm[];
  @Input() selectOption:SelectIterm;




  onMouseClick(event){

  }

  onItemClick(event){

  }

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
