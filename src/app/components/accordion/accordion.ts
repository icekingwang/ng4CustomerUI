import {AfterViewInit, OnDestroy, Component, Input} from "@angular/core";
import {BlockableUI} from "../common/blockableui";
import {trigger, state, style, animate, transition} from "@angular/animations";

@Component({
  selector:'p-accordion',
  template:`
    <div class="ui-accordion ui-widget ui-helper-reset">
    <ng-content></ng-content>
</div>
`
})
export class Accordion implements BlockableUI{


  getBlockableElement(): HTMLElement {
    return null;
  }
}


@Component({
 selector:'p-accordionTab',
  template:`
    <div class="ui-accordion-header ui-state-default ui-corner-all" 
    [ngClass]="{'ui-state-active':selected, 'ui-state-disabled':disabled}"
    (click)="toggle($event)">
        <span class="fa fa-fw" [ngClass]="{'fa-caret-down':selected,'fa-caret-right': !selected}"></span>
        <a href="#" *ngIf="!hasHeaderFacet" role="tab" [attr.aria-expanded]="selected" [attr.aria-selected]="selected">{{header}}</a>
        <a href="#" *ngIf="hasHeaderFacet" role="tab" [attr.aria-expanded]="selected" [attr.aria-selected]="selected">
        <ng-content select="p-header"></ng-content></a>
    </div>
    <div class="ui-accordion-content-wrapper" [@tabContent]="selected?'visible':'hidden'" (@tabContent.done) =onToggleDone($event)
        [ngClass]="{'ui-accordion-content-wrapper-overflown':!selected||animating}" role="tabpanel" [attr.aria-hidden]="!selected">
      <div class="ui-accordion-content ui-widget-content" >
        <ng-content></ng-content>
</div>
    </div>
  `,
  animations:[
    trigger('tabContent',[
        state('hidden',style({
          height:0
        })),
        state('visible',style({
          height:'*'
        })),
      transition('hidden<=>visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
      ]
    )
  ]
})
export class AccordionTab implements OnDestroy{

  @Input() selected:boolean;

  @Input() disabled:boolean;
  @Input() hasHeaderFacet:boolean;
  @Input() animating:boolean;

  ngOnDestroy(): void {
  }
}
