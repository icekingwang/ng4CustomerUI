import {AfterViewInit, OnDestroy, Component} from "@angular/core";
import {BlockableUI} from "../common/blockableui";

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
    <div class="ui-accordion-header ui-state-default ui-corner-all">
    
    </div>
    <div >
    
    </div>
  `
})
export class AccordionTab implements OnDestroy{

  ngOnDestroy(): void {
  }
}
