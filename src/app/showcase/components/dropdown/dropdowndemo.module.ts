import {NgModule} from "@angular/core";
import {DropDownDemoComponent} from "./dropdowndemo.component";
import {RouterModule} from "@angular/router";
import {dropDownRoutes} from "./dropdowndemo-routing.module";
import {CommonModule} from "@angular/common";
import {DropDown} from "../../../components/dropdown/dropdown";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    RouterModule.forChild(dropDownRoutes)
  ],
  declarations: [
    DropDown,
    DropDownDemoComponent
  ]
})
export class DropdownDemoModule {}
