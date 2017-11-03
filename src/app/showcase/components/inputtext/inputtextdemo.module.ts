import {NgModule} from "@angular/core";
import {InputTextDemoComponent} from "./inputtextdemo.component";
import {RouterModule} from "@angular/router";
import {inputtextdemoRoutes} from "./inputtextdemo-routing.module";
import {InputTextModule} from "../../../components/inputtext/inputtext";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    RouterModule.forChild(inputtextdemoRoutes),
    InputTextModule
  ],
  declarations:[
    InputTextDemoComponent
  ],
  exports:[
  ],
  providers:[]
})
export class InputTextDemoModule{}
