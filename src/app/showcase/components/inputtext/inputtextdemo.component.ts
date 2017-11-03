import {Component} from "@angular/core";
@Component({
  templateUrl:"inputtextdemo.html"
})
export class InputTextDemoComponent {
   disabled:boolean =true;

   text:string;

   toggleDisabled(){
     this.disabled = !this.disabled;
   }
}
